<template>
  <div></div>
  <NuxtRouteAnnouncer />
  <header class="container">
    <h1>Archaeonary</h1>
    <p>Das Archäologie-Wörterbuch-Projekt</p>
  </header>
  <nav class="container">
    <ul>
      <li><NuxtLink to="/">Start</NuxtLink></li>
      <li><NuxtLink to="/about">Über</NuxtLink></li>
      <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
    </ul>
  </nav>
  <main class="container">
    <p>
      Archaeonary ist ein Projekt zur Erschließung archäologischer Begriffe.
    </p>
    <p>
      Hauptanliegen ist das Erstellen eines Wörterbuchs mit Übersetzungen und
      Erläuterungen dieser Begriffe.
    </p>
    <small v-if="numberOfTerms > 0"
      >Derzeit gibt es {{ numberOfTerms }}
      {{ numberOfTerms === 1 ? "Begriff" : "Begriffe" }}.</small
    >
    <small v-else>Derzeit gibt es keine Begriffe.</small>
    <section v-for="term in terms" :key="term.id">
      <article>
        <h4>{{ term.name }}</h4>
        <small
          ><em>{{ term.transcription }}</em></small
        >
        <blockquote>
          <p>{{ term.translation }}</p>
        </blockquote>
        <p>{{ term.description }}</p>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: terms } = await useAsyncData("terms", () => {
  return queryCollection("terms").order("name", "DESC").all();
});

const numberOfTerms = computed(() => {
  return terms.value ? terms.value.length : 0;
});
</script>
