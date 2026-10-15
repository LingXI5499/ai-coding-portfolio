<script setup lang="ts">
import {
  hasBullet,
  hasInternship,
  safeUrl,
  type ResumeDocument,
} from "../models/resume";
defineProps<{ resume: ResumeDocument }>();
</script>
<template>
  <article
    class="resume-sheet"
    :class="resume.settings.density"
    aria-label="A4 简历"
  >
    <header class="header">
      <div class="header-main">
        <h1 class="name">{{ resume.profile.fullName }}</h1>
        <p class="contact">
          <span v-if="resume.profile.phone">{{ resume.profile.phone }}</span
          ><span v-if="resume.profile.email">{{ resume.profile.email }}</span
          ><a
            v-if="
              resume.profile.github.label && safeUrl(resume.profile.github.url)
            "
            :href="resume.profile.github.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ resume.profile.github.label }}</a
          ><a
            v-if="
              resume.profile.website.label &&
              safeUrl(resume.profile.website.url)
            "
            :href="resume.profile.website.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ resume.profile.website.label }}</a
          >
        </p>
        <p v-if="resume.jobIntent.trim()" class="intent">
          <strong>求职意向：</strong>{{ resume.jobIntent }}
        </p>
      </div>
      <img class="resume-photo" :src="resume.profile.photoAsset" alt="证件照" />
    </header>
    <section class="section">
      <h2 class="section-title">教育背景</h2>
      <div class="edu-row">
        <div class="edu-main">
          {{
            [
              resume.education.school,
              resume.education.major,
              resume.education.degree,
            ]
              .filter(Boolean)
              .join(" | ")
          }}
        </div>
        <span class="date">{{ resume.education.period }}</span>
      </div>
      <p v-if="resume.education.courses.trim()" class="body">
        <strong>核心课程：</strong>{{ resume.education.courses }}
      </p>
    </section>
    <section v-if="resume.skills.some(hasBullet)" class="section">
      <h2 class="section-title">专业技能</h2>
      <div class="skills">
        <p v-for="skill in resume.skills.filter(hasBullet)" :key="skill.id">
          <strong v-if="skill.label.trim()"
            >{{ skill.label }}{{ skill.content.trim() ? "：" : "" }}</strong
          >{{ skill.content }}
        </p>
      </div>
    </section>
    <section
      v-if="hasInternship(resume.internship)"
      class="section internship-section"
    >
      <h2 class="section-title">实习经历</h2>
      <div class="project-title-row">
        <div class="project-title">
          {{
            [
              resume.internship.organization,
              resume.internship.project,
              resume.internship.role,
            ]
              .filter((x) => x.trim())
              .join(" | ")
          }}
        </div>
        <span class="date">{{ resume.internship.period }}</span>
      </div>
      <p v-if="resume.internship.techStack.trim()" class="tech">
        {{ resume.internship.techStack }}
      </p>
      <ul v-if="resume.internship.bullets.some(hasBullet)" class="bullets">
        <li
          v-for="b in resume.internship.bullets.filter(hasBullet)"
          :key="b.id"
        >
          <strong v-if="b.label.trim()"
            >{{ b.label }}{{ b.content.trim() ? "：" : "" }}</strong
          >{{ b.content }}
        </li>
      </ul>
    </section>
    <section v-if="resume.projects.length" class="section">
      <h2 class="section-title">项目经历</h2>
      <div
        v-for="project in resume.projects"
        :key="project.id"
        class="project-block"
      >
        <div class="project-title-row">
          <div class="project-title">{{ project.title }}</div>
          <span class="date">{{ project.period }}</span>
        </div>
        <p v-if="project.techStack.trim()" class="tech">
          {{ project.techStack }}
        </p>
        <p
          v-if="
            project.descriptor.trim() ||
            project.links.some((x) => x.label && safeUrl(x.url))
          "
          class="project-meta"
        >
          <span v-if="project.descriptor.trim()">{{ project.descriptor }}</span
          ><a
            v-for="link in project.links.filter(
              (x) => x.label && safeUrl(x.url),
            )"
            :key="link.id"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ link.label }}</a
          >
        </p>
        <ul v-if="project.bullets.some(hasBullet)" class="bullets">
          <li v-for="b in project.bullets.filter(hasBullet)" :key="b.id">
            <strong v-if="b.label.trim()"
              >{{ b.label }}{{ b.content.trim() ? "：" : "" }}</strong
            >{{ b.content }}
          </li>
        </ul>
      </div>
    </section>
    <section
      v-if="
        resume.settings.showHonors &&
        resume.honors.some((x) => x.content.trim())
      "
      class="section"
    >
      <h2 class="section-title">荣誉与活动</h2>
      <ul class="honors">
        <li
          v-for="h in resume.honors.filter((x) => x.content.trim())"
          :key="h.id"
        >
          {{ h.content }}
        </li>
      </ul>
    </section>
  </article>
</template>
