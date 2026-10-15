<script setup lang="ts">
import TextField from "./TextField.vue";
import BulletEditor from "./BulletEditor.vue";
import { move, type ResumeVersion } from "../models/resume";
defineProps<{ version: ResumeVersion }>();
const uuid = () => crypto.randomUUID();
const emit = defineEmits<{
  remove: [items: any[], index: number];
  photo: [event: Event];
}>();
</script>
<template>
  <div class="editor-content">
    <div class="editor-heading">
      <span class="eyebrow">YOUR NEXT CHAPTER</span>
      <h1>打磨你的下一步。</h1>
      <p>保留真实经历，为每一次机会准备。</p>
    </div>
    <section class="intent-card">
      <TextField
        v-model="version.resume.jobIntent"
        label="求职意向"
        hint="建议聚焦一个目标岗位；仅在姓名下方显示。"
      /><TextField
        v-model="version.note"
        label="岗位 / JD 备注"
        multiline
        hint="仅供编辑参考，不会出现在简历中。"
      />
    </section>
    <details>
      <summary>
        <span><i>01</i>个人信息</span><span>⌄</span>
      </summary>
      <div class="section-fields">
        <TextField
          v-model="version.resume.profile.fullName"
          label="姓名"
        /><TextField
          v-model="version.resume.profile.phone"
          label="电话"
        /><TextField
          v-model="version.resume.profile.email"
          label="邮箱"
        /><TextField
          v-model="version.resume.profile.github.label"
          label="GitHub 显示文字"
        /><TextField
          v-model="version.resume.profile.github.url"
          label="GitHub 链接"
        /><TextField
          v-model="version.resume.profile.website.label"
          label="个人网站显示文字"
        /><TextField
          v-model="version.resume.profile.website.url"
          label="个人网站链接"
        /><label class="field"
          ><span>替换证件照</span
          ><input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            @change="emit('photo', $event)"
          /><small>JPEG / PNG / WebP，最大 3MB。固定右上角。</small></label
        ><button
          @click="
            version.resume.profile.photoAsset = '/assets/resume-photo.png'
          "
        >
          恢复原照片
        </button>
      </div>
    </details>
    <details>
      <summary>
        <span><i>02</i>教育背景</span><span>⌄</span>
      </summary>
      <div class="section-fields">
        <TextField
          v-model="version.resume.education.school"
          label="学校"
        /><TextField
          v-model="version.resume.education.major"
          label="专业"
        /><TextField
          v-model="version.resume.education.degree"
          label="学历"
        /><TextField
          v-model="version.resume.education.period"
          label="教育时间"
        /><TextField
          v-model="version.resume.education.courses"
          label="核心课程"
          multiline
        />
      </div>
    </details>
    <details open>
      <summary>
        <span
          ><i>03</i>专业技能 <em>{{ version.resume.skills.length }}</em></span
        ><span>⌄</span>
      </summary>
      <div class="section-fields">
        <BulletEditor
          :items="version.resume.skills"
          title="技能"
          @remove="(a, i) => emit('remove', a, i)"
        />
      </div>
    </details>
    <details>
      <summary>
        <span><i>04</i>实习经历 <em>可选</em></span
        ><span>⌄</span>
      </summary>
      <div class="section-fields">
        <label class="check"
          ><input
            v-model="version.resume.internship.enabled"
            type="checkbox"
          />显示实习经历</label
        >
        <p class="helper">一项真实实习或项目实践。未填写时不显示。</p>
        <TextField
          v-model="version.resume.internship.organization"
          label="企业 / 组织"
        /><TextField
          v-model="version.resume.internship.project"
          label="参与项目"
        /><TextField
          v-model="version.resume.internship.role"
          label="角色 / 岗位"
        /><TextField
          v-model="version.resume.internship.period"
          label="实习时间"
        /><TextField
          v-model="version.resume.internship.techStack"
          label="实习技术栈"
          multiline
        /><BulletEditor
          :items="version.resume.internship.bullets"
          title="实习条目"
          @remove="(a, i) => emit('remove', a, i)"
        />
      </div>
    </details>
    <details open>
      <summary>
        <span
          ><i>05</i>项目经历 <em>{{ version.resume.projects.length }}</em></span
        ><span>⌄</span>
      </summary>
      <div class="section-fields">
        <div
          v-for="(project, index) in version.resume.projects"
          :key="project.id"
          class="project-editor"
        >
          <div class="project-editor-heading">
            <span>项目 {{ String(index + 1).padStart(2, "0") }}</span>
            <div>
              <button
                :disabled="index === 0"
                :aria-label="`项目${index + 1}上移`"
                @click="move(version.resume.projects, index, -1)"
              >
                ↑</button
              ><button
                :disabled="index === version.resume.projects.length - 1"
                :aria-label="`项目${index + 1}下移`"
                @click="move(version.resume.projects, index, 1)"
              >
                ↓</button
              ><button
                class="danger-text"
                @click="emit('remove', version.resume.projects, index)"
              >
                删除项目
              </button>
            </div>
          </div>
          <TextField
            v-model="project.title"
            :label="`项目${index + 1}名称`"
          /><TextField
            v-model="project.period"
            :label="`项目${index + 1}时间`"
          /><TextField
            v-model="project.techStack"
            :label="`项目${index + 1}技术栈`"
            multiline
          /><TextField
            v-model="project.descriptor"
            :label="`项目${index + 1}说明`"
            multiline
          />
          <div
            v-for="(link, j) in project.links"
            :key="link.id"
            class="link-editor"
          >
            <TextField
              v-model="link.label"
              :label="`项目${index + 1}链接${j + 1}文字`"
            /><TextField
              v-model="link.url"
              :label="`项目${index + 1}链接${j + 1}地址`"
            /><button
              class="danger-text"
              @click="emit('remove', project.links, j)"
            >
              删除链接
            </button>
          </div>
          <button
            class="add-button"
            @click="project.links.push({ id: uuid(), label: '', url: '' })"
          >
            ＋ 添加链接</button
          ><BulletEditor
            :items="project.bullets"
            :title="`项目${index + 1}条目`"
            @remove="(a, i) => emit('remove', a, i)"
          />
        </div>
        <button
          class="add-button"
          @click="
            version.resume.projects.push({
              id: uuid(),
              title: '',
              period: '',
              techStack: '',
              descriptor: '',
              links: [],
              bullets: [],
            })
          "
        >
          ＋ 添加项目
        </button>
      </div>
    </details>
    <details>
      <summary>
        <span><i>06</i>荣誉与活动</span><span>⌄</span>
      </summary>
      <div class="section-fields">
        <label class="check"
          ><input
            v-model="version.resume.settings.showHonors"
            type="checkbox"
          />显示荣誉与活动</label
        >
        <div
          v-for="(h, i) in version.resume.honors"
          :key="h.id"
          class="item-card"
        >
          <TextField v-model="h.content" :label="`荣誉${i + 1}`" multiline />
          <div class="item-bar">
            <button
              :disabled="i === 0"
              @click="move(version.resume.honors, i, -1)"
            >
              ↑</button
            ><button
              :disabled="i === version.resume.honors.length - 1"
              @click="move(version.resume.honors, i, 1)"
            >
              ↓</button
            ><button
              class="danger-text"
              @click="emit('remove', version.resume.honors, i)"
            >
              删除荣誉
            </button>
          </div>
        </div>
        <button
          class="add-button"
          @click="version.resume.honors.push({ id: uuid(), content: '' })"
        >
          ＋ 添加荣誉
        </button>
      </div>
    </details>
    <p class="editor-footnote">
      你的内容仅保存在当前浏览器。<br />定期导出
      JSON，为每一份认真准备留个备份。
    </p>
  </div>
</template>
