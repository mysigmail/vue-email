<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { useState } from '@/composables'

const router = useRouter()
const route = useRoute()

const { html, to, subject } = useState()

const view = ref()
const showDialog = ref(false)
const loading = ref(false)
const sendError = ref(false)

const formRef = ref<FormInstance>()

const form = reactive({
  to,
  subject,
})

const formRules = {
  to: [
    { required: true, message: 'Please enter the recipient address.' },
  ],
}

async function submitForm() {
  if (!formRef)
    return
  await formRef.value?.validate((valid) => {
    if (valid)
      onSend()
  })
}

async function onSend() {
  try {
    loading.value = true
    sendError.value = false
    await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        to: to.value,
        subject: subject.value,
        html: html.value,
      },
    })
    showDialog.value = false
  }
  catch (err) {
    console.error(err)
  }
  finally {
    sendError.value = true
    loading.value = false
  }
}

watch(view, () => {
  router.push({ query: { view: view.value } })
}, {
  immediate: true,
})

watch(route, (v) => {
  view.value = v.query.view
}, { immediate: true })
</script>

<template>
  <div class="flex items-center gap-4">
    <div>
      <ElRadioGroup v-model="view">
        <ElRadioButton label="desktop">
          Desktop
        </ElRadioButton>
        <ElRadioButton label="source">
          Source
        </ElRadioButton>
      </ElRadioGroup>
    </div>
    <DevOnly>
      <div>
        <ElButton class="relative top-[1px]" @click="showDialog = true">
          Send
        </ElButton>
        <ClientOnly>
          <ElDialog v-model="showDialog" width="500px" :append-to-body="true">
            <ElForm ref="formRef" :model="form" :rules="formRules" label-width="80px" label-position="left">
              <ElFormItem label="To" prop="to">
                <ElInput v-model="form.to" placeholder="example@gmail.com" />
              </ElFormItem>
              <ElFormItem label="Subject">
                <ElInput v-model="form.subject" placeholder="Testing Vue Email" />
              </ElFormItem>
            </ElForm>
            <ElAlert v-if="sendError" type="error" :closable="false">
              Error sending, try again.
            </ElAlert>
            <template #footer>
              <ElButton @click="showDialog = false">
                Cancel
              </ElButton>
              <ElButton type="primary" :loading="loading" @click="submitForm">
                Send
              </ElButton>
            </template>
          </ElDialog>
        </ClientOnly>
      </div>
    </DevOnly>
  </div>
</template>

<style lang="scss" scoped>
</style>
