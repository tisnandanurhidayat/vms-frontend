<template>
  <PageWrapper :title="'Welcome, ' + getUserInfo.realName.toUpperCase() + '.'">
    <div class="p-2">
      <div class="md:flex enter-y">
        <div class="ant-card ant-card-bordered ant-card-small md:w-1/2 w-full !md:mt-0 !md:mr-4">
          <CollapseContainer title="Announcement" :can-expan="false" id="announcement-container">
            <div class="my-2 mx-4 pr-2" id="announcement">
              <div class="font-medium" id="title">{{ title }}</div>
              <div class="mt-2 mb-2">{{ content }}</div>
            </div>
          </CollapseContainer>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { useUserStore } from '/@/store/modules/user';

  const props = { title: String, content: String };

  const title = 'Batas Waktu Penerimaan Bukti Potong PPh 2020 bertahun 2020.';
  const content = `Untuk penjelasan lebih lanjut dapat menghubungi bagian pajak dengan : kevien_firmanda@alfa-retail.co.id dan 
    gunawan_gunawan@alfa-retail.co.id Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum ut neque 
    id gravida. Curabitur at auctor velit. Ut luctus vitae felis non semper. Curabitur ultrices eget risus quis dapibus. \n\n
    Morbi erat magna, varius non finibus a, pharetra tempus nulla. Proin ac tellus laoreet odio dictum facilisis. 
    Integer malesuada nec velit sed consequat. Etiam vel leo augue. Cras faucibus laoreet mi, eu maximus nibh. 
    Cras tincidunt, elit luctus luctus accumsan, augue diam aliquam est, ut volutpat lorem ipsum venenatis orci. \n\n
    Donec porttitor volutpat neque ac interdum. Maecenas consequat ante eu tortor tempus venenatis. Sed vulputate in leo 
    at aliquet. Duis eget accumsan diam. Integer ac dignissim justo, id ultrices erat. Proin vehicula dui purus, at 
    posuere nisl feugiat et. Morbi vel enim a lacus rutrum fermentum eu eget velit. Sed sit amet odio a ligula gravida 
    eleifend at non nisl. Mauris euismod tellus sed pharetra vestibulum. Nulla eleifend magna eget erat blandit, sit 
    amet tincidunt erat commodo. Curabitur sit amet accumsan justo, sit amet laoreet odio. Vestibulum at tellus eu neque
    vehicula accumsan sit amet eget massa. Maecenas eget est ut purus vulputate maximus quis sit amet ipsum. Aenean vitae
    neque leo. Suspendisse non varius nisi, et lobortis orci. Aliquam vehicula est non facilisis varius. Ut vehicula 
    fermentum malesuada. Vestibulum mattis posuere risus. Duis posuere dapibus eleifend. In hac habitasse platea 
    dictumst. Sed id lorem mauris. Duis vulputate velit sit amet augue faucibus rutrum.`;

  export default defineComponent({
    components: { CollapseContainer, PageWrapper },
    props,
    setup() {
      const { createMessage } = useMessage();

      const userStore = useUserStore();
      const getUserInfo = computed(() => {
        const { realName = '', avatar, desc } = userStore.getUserInfo || {};
        return { realName, avatar: avatar, desc };
      });

      return {
        handleSubmit: (values: Recordable) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        props,
        title,
        content,
        getUserInfo,
      };
    },
  });
</script>

<style scoped>
  #announcement {
    height: 50vh;
    overflow: auto;
    white-space: pre-line;
  }

  #title {
    color: #ed1b24;
  }
</style>
