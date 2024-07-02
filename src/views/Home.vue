<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="text-xl">Hello Demander</div>
    <Button class="text-black flex items-center gap-1">
      <Icon icon="mdi:progress-clock" />
      <Heading :level="4"> ONGOING </Heading>
    </Button>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </Paragraph>
  </div>
</template>
<script setup>
import Button from '@/components/ui/Button.vue'
import Heading from '@/components/ui/Heading.vue'
import Icon from '@/components/ui/Icon.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
</script>
<style lang=""></style>
