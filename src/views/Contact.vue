<template>
  <div class="page__contact">
    <TitlePage title="Ma page contact" />
    <form>
        <div class="form-group">
            <label>Votre nom</label>
            <input v-model="lastName" name="lastName"/>
        </div>
        <div class="form-group">
            <label>Votre prénom</label>
            <input v-model="firstName" name="firstName"/>
        </div>
        <div class="form-group">
            <label>Votre message</label>
            <input v-model="message" name="message"/>
        </div>
         <Button
        btnTitle="Envoyer"
        :classList="btnClass"
        :btnFunction="toggleModal"
        />
    </form>
    <Modal :validate="validateModal" :cancel="cancelModal" v-show="isModalActive">
      <!-- slot start-->
      <h2>Titre modal</h2>
      <p>lorem ipsum dolem</p>
      <p>paragraph 2</p>
      <!-- slot end-->
    </Modal>
  </div>
</template>

<script>
import TitlePage from '../components/TitlePage';
import Button from '../components/Button';
import Modal from '../components/Modal';

export default {
  components: {
    TitlePage,
    Button,
    Modal,
  },
  data: function() {
    return {
      mytitle: 'Say Hello',
      btnClass: 'btn btn-red',
      isModalActive:false,
      lastName:"",
      firstName:"",
      message:"",
    };
  },
  methods: {
      validateModal: function() {
          const myBody = {
              "lastName" : this.lastName,
              "firstName" : this.firstName,
              "message" : this.message
          }
          console.log(myBody);
          this.isModalActive=false;
      } ,
      cancelModal: function() {
          this.isModalActive=false;
      } ,
      openModal: function() {
          this.isModalActive= true
      },
      toggleModal: function(e) {
        //   e.preventDefault();
          this.isModalActive = !this.isModalActive
      }

  },
};
</script>

<style lang="scss" scoped></style>
