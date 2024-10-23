<template>
        <!-- ================================================================
          ------------ Include Hero Section -----------------------
        ================================================================ -->
        <HeroSection></HeroSection>
        <!-- ================================================================
          ------------ About Section -----------------------
        ================================================================ -->
        <AboutSection></AboutSection>

        <!-- ================================================================
          ------------ Project Section -----------------------
        ================================================================ -->
        <ProjectSection></ProjectSection>
        <!-- ================================================================
          ------------ Work Experience Section -----------------------
        ================================================================ -->
        <WorkExperienceSection></WorkExperienceSection>
        <!-- ================================================================
          ------------ Technical Skill Section -----------------------
        ================================================================ -->
        <TechnicalSection></TechnicalSection>
        <!-- ================================================================
          ------------ Education Section -----------------------
        ================================================================ -->
        <EducationSectionVue></EducationSectionVue>
        <!-- ================================================================
          ------------ Contact Section -----------------------
        ================================================================ -->
        <Contectus></Contectus>
</template>
<script>
import HeroSection from "../components/heroSection.vue";
import AboutSection from "../components/aboutSection.vue";
import ProjectSection from  "../components/projectSection.vue";
import WorkExperienceSection from "../components/workExperienceSection.vue";
import TechnicalSection from "../components/technicalSkills.vue";
import EducationSectionVue from '../components/educationSection.vue';
import Contectus from "../components/contactUsSection.vue";
export default {
    components: {
        HeroSection,
        AboutSection,
        ProjectSection,
        WorkExperienceSection,
        TechnicalSection,
        EducationSectionVue,
        Contectus
    }
}
</script>
