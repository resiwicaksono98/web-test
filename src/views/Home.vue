<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="text-xl">Hello Demander</div>
    <Button class="text-white flex items-center gap-1 bg-primary">
      <Icon icon="mdi:progress-clock" />
      <Heading :level="4"> ONGOING </Heading>
    </Button>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </Paragraph>
    <Form @submit="submit" :validation-schema="schema">
      <Input name="email" placeholder="Email" rules="required" />
      <Button type="submit" class="w-full">Submit</Button>
    </Form>
  </div>
</template>
<script setup>
import Button from '@/components/ui/Button.vue'
import Heading from '@/components/ui/Heading.vue'
import Icon from '@/components/ui/Icon.vue'
import Input from '@/components/ui/Input.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
import { Form } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required')
})

function submit(data) {
  console.log(data)
}
</script>
<style lang=""></style>
