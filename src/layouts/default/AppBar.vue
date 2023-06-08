<template>
  <v-navigation-drawer width="280" permanent>
    <v-list v-model="open">
      <v-list-subheader>Apps and Pages</v-list-subheader>
      <v-list-item to="/" exact prepend-icon="mdi-home" value="home" title="Dashboard"></v-list-item>
      <v-list-item to="/media" prepend-icon="mdi-folder-multiple-image" value="media" title="Media"></v-list-item>
      <v-list-item to="/chat" prepend-icon="mdi-chat" value="chat" title="Chat"></v-list-item>
      <v-list-item to="/Calendar" prepend-icon="mdi-calendar" value="calendar" title="Calendar"></v-list-item>

      <v-list-group value="Invoice">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-note-text"
            title="Invoice"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title], i) in invoice"
          :key="i"
          :title="title"
          prepend-icon="mdi-circle-outline"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="User">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account"
            title="User"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title], i) in user"
          :key="i"
          :title="title"
          prepend-icon="mdi-circle-outline"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Roles">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-shield-account"
            title="Roles & Permissions"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title], i) in roles"
          :key="i"
          :value="title"
          :title="title"
          prepend-icon="mdi-circle-outline"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      open: [],
      invoice: [
        ['Management'],
        ['Settings'],
      ],
      user: [
        ['List'],
        ['View'],
      ],
      roles: [
        ['Roles'],
        ['Permissions'],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
