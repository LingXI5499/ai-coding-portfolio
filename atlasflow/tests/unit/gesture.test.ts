import { describe, expect, it } from 'vitest'
import { GestureMotionFilter } from '../../src/utils/gestureMotion'
describe('gesture input stability', () => {
  it('requires three confident frames before accepting a fist', () => {
    const f = new GestureMotionFilter()
    expect(f.update('Closed_Fist', 0.9, { x: 0.5, y: 0.5 }).kind).toBe('none')
    expect(f.update('Closed_Fist', 0.9, { x: 0.5, y: 0.5 }).kind).toBe('none')
    expect(f.update('Closed_Fist', 0.9, { x: 0.5, y: 0.5 }).kind).toBe('gather')
    expect(f.update('Closed_Fist', 0.9, { x: 0.5, y: 0.5 }).kind).toBe('none')
  })
  it('filters tiny jitter and clamps large moves', () => {
    const f = new GestureMotionFilter()
    for (let i = 0; i < 3; i++) f.update('Open_Palm', 0.9, { x: 0.5, y: 0.5 })
    expect(f.update('Open_Palm', 0.9, { x: 0.5001, y: 0.5001 })).toMatchObject({ dx: 0, dy: 0 })
    expect(f.update('Open_Palm', 0.9, { x: 1, y: 1 })).toMatchObject({ dx: -35, dy: 35 })
  })
  it('clears stability when confidence is lost', () => {
    const f = new GestureMotionFilter()
    for (let i = 0; i < 3; i++) f.update('Open_Palm', 0.9, { x: 0.2, y: 0.2 })
    f.update('Open_Palm', 0.5, { x: 0.9, y: 0.9 })
    expect(f.update('Open_Palm', 0.9, { x: 0.9, y: 0.9 }).kind).toBe('none')
    expect(f.update('Open_Palm', 0.9, { x: 0.9, y: 0.9 }).kind).toBe('move')
  })
  it('keeps panning while an off-centre palm is held still', () => {
    const f = new GestureMotionFilter()
    f.update('Open_Palm', 0.65, { x: 0.7, y: 0.5 })
    for (let i = 0; i < 10; i++)
      expect(f.update('Open_Palm', 0.65, { x: 0.7, y: 0.5 })).toMatchObject({
        kind: 'move',
        dx: expect.any(Number),
        dy: 0,
      })
    const output = f.update('Open_Palm', 0.65, { x: 0.7, y: 0.5 })
    expect(output.kind === 'move' && output.dx).toBeLessThan(-20)
  })
  it.each([
    ['Thumb_Up', 'resume'],
    ['Victory', 'overview'],
  ])('fires %s once per held pose', (name, action) => {
    const f = new GestureMotionFilter()
    for (let i = 0; i < 2; i++) expect(f.update(name!, 0.8, { x: 0.5, y: 0.5 }).kind).toBe('none')
    expect(f.update(name!, 0.8, { x: 0.5, y: 0.5 }).kind).toBe(action)
    expect(f.update(name!, 0.8, { x: 0.5, y: 0.5 }).kind).toBe('none')
  })
})
