<template>
  <div class="about">
    <TitlePage :title="titleAbout" :subTitle="subTitleAbout"/>
  </div>
</template>
<script>
  import TitlePage from "../components/TitlePage";
  export default {
    components: {
      TitlePage
    },
    data: function() {
      return {
        titleAbout: "Ma page About",
        subTitleAbout: "Lorem ipsum"
      }
    }
  }
</script>