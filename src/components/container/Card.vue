<template>
  <div class="card border p-4 rounded shadow">
    <img :src="image" alt="Card image" class="w-full h-48 object-cover rounded-t" />
    <div class="card-content mt-4">
      <Heading :level="3" align="center">{{ title }}</Heading>
      <Paragraph align="left">{{ description }}</Paragraph>
      <Button type="primary" @click="onButtonClick">Click Me</Button>
    </div>
  </div>
</template>

<script setup>
import Heading from '@/components/ui/Heading.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
import Button from '@/components/ui/Button.vue'

defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
