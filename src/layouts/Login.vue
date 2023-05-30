<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row flex flex-center">
      <video
        class="video"
        poster="https://cdn.quasar.dev/img/polina.jpg"
        autoplay
        loop
        muted
        id="bgvid"
      >
        <source
          type="video/webm"
          src="https://cdn.quasar.dev/img/polina.webm"
        />
        <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4" />
      </video>

      <div class="col-md-3 col-sm-12 my-card">
        <q-card
          class="text-center"
          flat
          square
          style="min-width: 400px; min-height: 650px"
        >
          <q-card-section>
            <q-btn to="/" label="main" flat color="primary"></q-btn>
            <span> | </span>
            <q-btn to="/signin" label="sign in" flat color="primary"></q-btn>
          </q-card-section>
          <q-card-section class="flex justify-center">
            <q-card-section style="align-self: center" class="q-mt-xl">
              <q-card-section
                class="text-h4 text-primary text-weight-bold q-mt-sm q-mb-md"
                >Login</q-card-section
              >
              <q-card-section>
                <LoginForm
                  @onSave="save"
                  :isLoading="isLoading"
                  ref="loginForm"
                ></LoginForm>
              </q-card-section>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "src/components/auth/LoginForm.vue";
import { useUserStore } from "src/stores/user";
import { mapActions } from "pinia";
window.onpopstate = function () {
  history.go(1);
};

export default defineComponent({
  title: "",
  components: { LoginForm },
  props: {},
  emits: [],
  data() {
    return {
      isLoading: false,
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    ...mapActions(useUserStore, ["loginLocal"]),
    async save(form) {
      // store 처리 저장
      this.isLoading = true;
      const result = await this.loginLocal(form);
      this.isLoading = false;
      console.log("result", result);
      if (result && result.data) {
        this.$q.notify({
          type: "info",
          message: `${result.data.mb_id} 님 로그인 하셨습니다.`,
        });
        this.$router.push("/");
      }
    },
  },
});
</script>

<style scoped lang="scss">
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
video#bgvid {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
}
</style>
