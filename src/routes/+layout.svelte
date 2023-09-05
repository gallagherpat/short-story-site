<script lang="ts">
    //@ts-nocheck
	import NavButton from './../components/navButton.svelte';
    import "../app.css";
    import { onMount } from 'svelte';
    import { page, navigating } from '$app/stores';
    let navState = false;
    let navClass = 'hidden';
    let overlayClass = 'bg-transparent';
    let hidden = '-z-20'
    let bgScrollPos: string;
    let path = $page.url.pathname;

    $: if(navigating) {
        path = $page.url.pathname
        if($page.url.pathname != "/"){
            bgScrollPos = 'bg-white'
            window.removeEventListener('scroll', handleScroll)
        }else{
            bgScrollPos = 'bg-orange-500'
        }
    }

    const handleScroll = function(){
        const scrollPos = window.scrollY;
        if(scrollPos > 250){
            bgScrollPos = 'bg-white'
        }else{
            bgScrollPos = 'bg-orange-500'
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const navClick = function(hamburger: string) {
        navState = !navState;
        if(navState && hamburger === 'hamburger'){
            navClass = `absolute transform origin-top animate-scale-down top-16 pb-4 ${bgScrollPos} rounded-b-2xl w-full drop-shadow-lg z-10`
            hidden = ''
            overlayClass = 'bg-black';
        }else if (!navState && hamburger === 'hamburger'){
            navClass = `absolute transform origin-top animate-scale-up top-16 pb-4 ${bgScrollPos} rounded-b-2xl w-full drop-shadow-lg z-10`
            setTimeout(() => {
                navClass = 'hidden'
                overlayClass = 'bg-transparent'
                hidden = '-z-20'
            }, 99)
        }
        else{
            setTimeout(() => {
                navClass = 'hidden'
                overlayClass = 'bg-transparent'
                hidden = '-z-20'
            }, 200)
        }
    }

  </script>
  
  <svelte:head>
    <meta name="description">
  </svelte:head>
  <header class="sticky top-0 h-16 text-2xl transition-colors duration-300 {bgScrollPos} border-b-[1px] border-b-slate-800 z-20">
    <h1 class="absolute top-4 ml-4">Short Story</h1>
    <button on:click={() => {navClick('hamburger')}} class="absolute top-0 right-0 h-14 w-14 pr-4 pt-2">
        <img src="/Hamburger_icon.png" alt="Hamburger icon">
    </button>
    <nav class={navClass}>
        <ul class="indent-4">
            <NavButton navClick={navClick} name="home"/>
            <NavButton navClick={navClick} name="about"/>
            <NavButton navClick={navClick} name="newest"/>
        </ul>
      </nav>
      <div class="absolute top-16 h-screen w-screen transition-colors duration-300 ease-in-out {overlayClass} bg-opacity-60 {hidden}"></div>
  </header>

    <slot />
  <footer class="w-full mx-auto text-center">
    Made by ya boy
  </footer>

  