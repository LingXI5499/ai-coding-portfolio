<script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import { init, use } from 'echarts/core';
  import { PieChart, LineChart } from 'echarts/charts';
  import {
    TooltipComponent,
    GridComponent,
    LegendComponent,
  } from 'echarts/components';
  import { SVGRenderer } from 'echarts/renderers';

  // 只注册使用的图表与渲染器；图表实例跟随组件生命周期释放。
  use([
    PieChart,
    LineChart,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    SVGRenderer,
  ]);
  const props = defineProps({
    option: { type: Object, required: true },
    label: { type: String, required: true },
  });
  const container = ref(null);
  let chart, observer;
  const resize = () => chart?.resize();
  onMounted(() => {
    chart = init(container.value, null, { renderer: 'svg' });
    chart.setOption(props.option);
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(resize);
      observer.observe(container.value);
    } else {
      window.addEventListener('resize', resize);
    }
  });
  watch(
    () => props.option,
    (option) => chart?.setOption(option, true),
    { deep: true },
  );
  onBeforeUnmount(() => {
    observer?.disconnect();
    window.removeEventListener('resize', resize);
    chart?.dispose();
  });
</script>
<template>
  <div
    ref="container"
    class="report-chart"
    role="img"
    :aria-label="label"
  ></div>
</template>
<style scoped>
  .report-chart {
    width: 100%;
    height: 280px;
    min-width: 0;
    /* ResizeObserver 重绘前，旧尺寸的 SVG 也不能撑开页面。 */
    overflow: hidden;
  }
</style>
