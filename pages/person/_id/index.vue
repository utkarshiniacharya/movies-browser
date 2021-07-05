<template>
  <div>
      {{ this.personName }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            personPhotoURL: '',
            personName: '',
            biography: '',
            birthDay: '',
            placeOfBirth: ''
        }
    },
    methods: {
        fetchPersonDetails() {
            return new Promise((resolve, reject) => {
                this.$axios.get("/3/person/" + this.$route.params.id + "?api_key=" + process.env.tmdbAPIKey)
                    .then(response => {
                        console.log(response.data.profile_path);
                        this.personPhotoURL = "https://image.tmdb.org/t/p/original" + response.data.profile_path;
                        this.personName = response.data.name;
                        this.biography = response.data.biography;
                        this.birthDay = response.data.birthday;
                        this.placeOfBirth = response.data.place_of_birth;
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
        }
    },
    created() {
        this.fetchPersonDetails();
    }
}
</script>

<style scoped>

</style>