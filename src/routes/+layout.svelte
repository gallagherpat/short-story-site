<script lang="ts">
	import NavButton from './../components/navButton.svelte';
    import "../app.css";
    import { onDestroy, onMount } from 'svelte';
    let navState = false;
    let navClass = 'hidden';
    let bgScrollPos = 'bg-orange-500'

    const handleScroll = function(){
        const scrollPos = window.scrollY;
        console.log(scrollPos)
        if(scrollPos > 250){
            bgScrollPos = 'bg-white'
        }else{
            bgScrollPos = 'bg-orange-500'
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);

        onDestroy(() => {
            window.removeEventListener('scroll', handleScroll);
        })
    })


    const navClick: (event: MouseEvent) => void = function() {
        navState = !navState;

        if(navState){
            navClass = `absolute transform origin-top animate-scale-down top-16 pb-4 ${bgScrollPos} rounded-b-2xl w-full drop-shadow-lg`
        }else{
            setTimeout(() => {navClass = 'hidden'}, 300)
        }
    }

  </script>
  
  <svelte:head>
    <meta name="description">
  </svelte:head>
  <header class="sticky top-0 h-16 text-2xl transition-colors duration-300 {bgScrollPos} border-b-[1px] border-b-slate-800 z-20">
    <h1 class="absolute top-4 ml-4">Short Story</h1>
    <button on:click={navClick} class="absolute top-0 right-0 h-14 w-14 pr-4 pt-2">
        <img src="/Hamburger_icon.png" alt="Hamburger icon">
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

  <footer class="w-full mx-auto text-center">
    Made by ya boy
  </footer>

  