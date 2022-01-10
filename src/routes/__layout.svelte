<script lang="ts">
  import "../app.css";
</script>

<main>
  <slot />
</main>

<footer>
  <p>Made by Brian Mitchell - <a href="https://brianm.me">brianm.me</a></p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 2.5rem 0;
    }
  }
</style>
