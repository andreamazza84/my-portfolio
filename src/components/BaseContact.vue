<template>
  <form
    id="contact-form"
    @submit.prevent="submit()"
  >
    <v-row>
      <v-col>
        <v-text-field
          v-model="message.name"
          class="form-input"
          flat
          label="Nome*"
          solo
          :error-messages="nameErrors"
          @input="$v.message.name.$touch()"
          @blur="$v.message.name.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="message.email"
          class="form-input"
          flat
          label="Email*"
          solo
          :error-messages="emailErrors"
          @input="$v.message.email.$touch()"
          @blur="$v.message.email.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="message.object"
          class="form-input"
          flat
          label="Oggetto*"
          solo
          :error-messages="objectErrors"
          @input="$v.message.object.$touch()"
          @blur="$v.message.object.$touch()"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="message.text"
          class="form-input"
          flat
          label="Scrivi qua*"
          solo
          :error-messages="textErrors"
          @input="$v.message.text.$touch()"
          @blur="$v.message.text.$touch()"
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="message.checkbox"
          :error-messages="checkboxErrors"
          required
          @change="$v.message.checkbox.$touch()"
          @blur="$v.message.checkbox.$touch()"
        >
          <template v-slot:label>
            <div>
              Accetto l'informativa sull'utilizzo dei dati |
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a
                    target="_blank"
                    href="https://www.iubenda.com/privacy-policy/91506390"
                    @click.stop
                    v-on="on"
                  >
                  Privacy Policy 
                  </a>
                </template>
                Si apre in una nuova finestra.
              </v-tooltip>
            </div>
          </template>
        </v-checkbox>
      </v-col>

      <v-col
        class="mx-auto"
        cols="auto"
      >
        <v-btn
          class="btn-clear"
          x-large
          @click="clear()"
        >
          Reset
        </v-btn>
      </v-col>

      <v-col
        class="mx-auto"
        cols="auto"
      >
        <v-btn
          type="submit" 
          class="btn-submit"
          x-large
        >
          Invia
        </v-btn>
      </v-col>

      <BaseSnackbar :name="message.name"/>
 
    </v-row>
    <input type="text" name="_honey" style="display:none" class="hidden-input">
    <input type="hidden" name="_captcha" value="false" class="hidden-input">
  </form>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength, between, email } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import BaseSnackbar from '@/components/BaseSnackbar'
  import BasePolicy from '@/components/BasePolicy'

  export default {
    components:{
      BaseSnackbar,
      BasePolicy
    },

    mixins: [validationMixin],

    validations: {
      message: {
        name: { 
          required, 
          maxLength: maxLength(30), 
          minLength: minLength(3)
        },
        email: { 
          required, 
          email 
        },
        object: { 
          required, 
          maxLength: maxLength(30),
          minLength: minLength(3)
        },
        text: { 
          required, 
           minLength: minLength(20)  
        },
        checkbox: {
          checked (val) {
            return val
          },
        },
      }
    },

    data: () => ({
      success: false,
      submitStatus: '',
      message:{
        name: '',
        email: '',
        select: null,
        text: '',
        object: '',
        checkbox: false,
      }
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.message.name.$dirty) return errors
        !this.$v.message.name.maxLength && errors.push('Lunghezza massima 30 caratteri')
        !this.$v.message.name.minLength && errors.push('Lunghezza minima 3 caratteri')
        !this.$v.message.name.required && errors.push('Richiesto')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.message.email.$dirty) return errors
        this.$v.message.email.maxLength && errors.push('Lunghezza massima 30 caratteri')
        !this.$v.message.email.email && errors.push('Inserisci un indirizzo email valido')
        !this.$v.message.email.required && errors.push('Richiesto')
        return errors
      },
      objectErrors () {
        const errors = []
        if (!this.$v.message.object.$dirty) return errors
        !this.$v.message.object.maxLength && errors.push('Lunghezza massima 30 caratteri')
        !this.$v.message.object.minLength && errors.push('Lunghezza minima 3 caratteri')
        !this.$v.message.object.required && errors.push('Richiesto')
        return errors
      },
      textErrors () {
        const errors = []
        if (!this.$v.message.text.$dirty) return errors
        !this.$v.message.text.minLength && errors.push('Lunghezza minima 20 caratteri')
        !this.$v.message.text.required && errors.push('Richiesto')
        return errors
      },
      checkboxErrors () {
        const errors = []
        if (!this.$v.message.checkbox.$dirty) return errors
        !this.$v.message.checkbox.checked && errors.push('Devi spuntare questa casella per continuare')
        return errors
      },
    },

    methods: {
       checkName(){
         this.$v.message.name.$touch(); 
       },

       submit() {
        //Vuelidate
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'Submit Status Error - Vuelidate'
          console.log(this.submitStatus);
        } 
        else {
          //Formspree.io
          let formData = new FormData();
          for(const index in this.message){
            formData.append(index, this.message[index]);
          }
          axios({
            method: "post",
            url: "https://formspree.io/f/mjvjoejl",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then( response => {
            if(response.data.ok){
              this.$store.dispatch('snackToggle');
              console.log("Message sent ", response.data.ok);
            }
          })
          .catch( error => {
            console.log(error);
          })
        } 
      },
      // submit(message) {
      //   //Form Submit -Template
      //   this.$v.$touch();
      //   //
      //   axios.defaults.headers.post['Content-Type'] = 'application/json';
      //   axios.post('https://formsubmit.co/ajax/a263761003a53d0d3b44000bb483e046', { message })
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error));
      //   //
      //   this.success = this.$store.state.snackbar;
      //   this.$store.dispatch('snackToggle');
      //   console.log("Message sent ",this.success);
      // },

      clear () {
        this.$v.$reset()
        this.message.name = ''
        this.message.email = ''
        this.message.object = ''
        this.message.select = null
        this.message.checkbox = false
      },
    },
  }
</script>
<style lang="scss" scoped>
  #contact-form{
    position: relative;   
    .hidden-input{
      position: absolute;
    }
    .btn-submit{
      background-color: $b_triadic_1 !important;
      color: $f_dark !important;
    }
    .btn-clear{
      background-color: $b_triadic_2 !important;
      color: $f_dark !important;
    }
  }
</style>