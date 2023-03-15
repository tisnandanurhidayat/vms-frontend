<template>
  <LoginFormTitle class="enter-x" />
  <Form class="p-4 enter-x" ref="formRef" @keypress.enter="handleLogin">
    <FormItem name="account" class="enter-x">
      <Input
        size="large"
        v-model:value="formData.account"
        :placeholder="'Username'"
        class="fix-auto-fill"
      />
    </FormItem>
    <FormItem name="password" class="enter-x">
      <InputPassword
        size="large"
        visibilityToggle
        v-model:value="formData.password"
        :placeholder="'Password'"
      />
    </FormItem>

    <ARow class="enter-x">
      <ACol :span="12">
        <FormItem>
          <!-- No logic, you need to deal with it yourself -->
          <Checkbox v-model:checked="rememberMe" size="small">
            {{ t('sys.login.rememberMe') }}
          </Checkbox>
        </FormItem>
      </ACol>
      <ACol :span="12">
        <FormItem :style="{ 'text-align': 'right' }">
          <!-- No logic, you need to deal with it yourself -->
          <!-- <Button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            {{ t('sys.login.forgetPassword') }}
          </Button> -->
        </FormItem>
      </ACol>
    </ARow>

    <FormItem class="enter-x">
      <Button type="primary" size="large" block @click="handleLogin">
        {{ t('sys.login.loginButton') }}
      </Button>
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  import { Checkbox, Form, Input, Row, Col, Button } from 'ant-design-vue';
  import LoginFormTitle from './LoginFormTitle.vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  // import { useMessage } from '/@/hooks/web/useMessage';

  // import { useUserStore } from '/@/store/modules/user';
  // import { LoginStateEnum } from './useLogin';
  // import { useDesign } from '/@/hooks/web/useDesign';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  import axios from 'axios';

  const ACol = Col;
  const ARow = Row;
  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const { t } = useI18n();
  // const { notification, createErrorModal } = useMessage();
  // const { prefixCls } = useDesign('login');
  // const userStore = useUserStore();

  // const { setLoginState, getLoginState } = useLoginState();
  // const { getFormRules } = useFormRules();

  const formRef = ref();
  // const loading = ref(false);
  const rememberMe = ref(false);

  // TODO: connect formData to API
  const formData = reactive({
    account: 'tisnanda',
    password: '123456',
  });

  // const { validForm } = useFormValid(formRef);

  // const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);
  const API_URL_X = '/po';
  async function handleLogin() {
    // console.log(API_URL);
    const response = await axios.get(`${API_URL_X}/getPO`);
    console.log(response);
  }

  // export { handleLogin };

  // async function handleLogin() {
  //   const data = await validForm();
  //   if (!data) return;
  //   try {
  //     loading.value = true;
  //     const userInfo = await userStore.login({
  //       password: data.password,
  //       username: data.account,
  //       mode: 'none', //不要默认的错误提示
  //     });
  //     if (userInfo) {
  //       notification.success({
  //         message: t('sys.login.loginSuccessTitle'),
  //         description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
  //         duration: 3,
  //       });
  //     }
  //   } catch (error) {
  //     createErrorModal({
  //       title: t('sys.api.errorTip'),
  //       content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
  //       getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
  //     });
  //   } finally {
  //     loading.value = false;
  //   }
  // }
</script>
