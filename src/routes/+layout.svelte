<script lang="ts">
	import NavButton from './../components/navButton.svelte';
    import "../app.css";
    let navState = false;
    let navClass = 'hidden';

    const navClick: (event: MouseEvent) => void = function() {
        navState = !navState;

        if(navState){
            navClass = "absolute transform origin-top animate-scale-down top-16 pb-4 bg-white rounded-b-2xl w-full drop-shadow-lg"
        }else{
            setTimeout(() => {navClass = 'hidden'}, 300)
        }
    }

  </script>
  
  <svelte:head>
    <meta name="description">
  </svelte:head>
  <header class="sticky top-0 h-16 text-2xl bg-white drop-shadow-lg">
    <h1 class="absolute top-4 ml-4">Short Story</h1>
    <button on:click={navClick} class="absolute top-0 right-0 h-14 w-14 pr-4 pt-2">
        <img src="./Hamburger_icon.png" alt="Hamburger icon">
    </button>
    <nav class={navClass}>
        <ul class="indent-4">
            <NavButton navClick={navClick} name="home"/>
            <NavButton navClick={navClick} name="about"/>
            <NavButton navClick={navClick} name="newest"/>
        </ul>
      </nav>
  </header>

  <slot />