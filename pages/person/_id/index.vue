<template>
  <div class="person-details">
    <div>
        <img :src="`https://image.tmdb.org/t/p/original${personPhotoURL}`" alt="No image available." class="poster" v-if="personPhotoURL !== null">
        <div class="null-poster" v-else />
    </div>
    <div class="person-info">
        <h2 class="person-name">{{ personName}}</h2>
        <h3 class="heading">Biography</h3>
        <p class="person-biography">{{ biography }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            personPhotoURL: '',
            personName: '',
            biography: ''
        }
    },
    methods: {
        fetchPersonDetails() {
            return new Promise((resolve, reject) => {
                this.$axios.get("/3/person/" + this.$route.params.id + "?api_key=" + process.env.tmdbAPIKey)
                    .then(response => {
                        this.personPhotoURL = "https://image.tmdb.org/t/p/original" + response.data.profile_path;
                        this.personName = response.data.name;
                        this.biography = response.data.biography;
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
.person-details {
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    max-width: 900px;
    margin: auto;
}
.person-info {
    margin: 2rem;
}
.poster {
    border-radius: 5%;
    height: 250px;
    width: 170px;
    z-index: -1;
    object-fit: cover;
}
.null-poster {
  border-radius: 5%;
  height: 250px;
  width: 170px;
  background-color: gray;
  opacity: 0.3;
}
@media only screen and (max-width: 960px) {
    .person-details {
        flex-direction: column;
        text-align: justify;
    }
    .person-name {
        margin-bottom: 2rem;
        text-align: center;
    }
}
</style>