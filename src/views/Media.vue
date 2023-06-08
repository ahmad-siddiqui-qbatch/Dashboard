<template>
  <div class="pa-4">
    <div class="v-card">
    <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/*" multiple />

    <v-row class="g-0">
      <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-0" @click="openModal(index)">
          <v-img :src="item.url" :height="mediaHeight" cover></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="modalOpen" max-width="800px">
      <v-carousel v-model="modalIndex" hide-delimiters hide-arrows>
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <v-img :src="item.url" :height="modalMediaHeight" class="modal-image"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { url: 'https://source.unsplash.com/random/800x600', type: 'image', dateAdded: '2023-06-01' },
        { url: 'https://source.unsplash.com/random/800x600', type: 'image', dateAdded: '2023-06-03' },
        { url: 'https://source.unsplash.com/random/800x600', type: 'image', dateAdded: '2023-06-03' },
        { url: 'https://source.unsplash.com/random/800x600', type: 'image', dateAdded: '2023-06-03' },
      ],
      modalOpen: false,
      modalIndex: 0,
    };
  },
  methods: {
    handleFileUpload(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const newItem = { url: e.target.result, type: 'image', dateAdded: new Date().toISOString() };
          this.items.unshift(newItem); 
        };
        fileReader.readAsDataURL(file);
      }
    },
    openModal(index) {
      this.modalIndex = index;
      this.modalOpen = true;
    },
  },
  computed: {
    mediaHeight() {
      return '200px';
    },
    modalMediaHeight() {
      return '500px';
    },
  },
};
</script>

<style>
.modal-image {
  object-fit: cover;
}
</style>
