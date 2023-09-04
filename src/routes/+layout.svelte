<script>
    import "../app.css";
    let navState = false;
    //let navClass = "absolute transform origin-top animate-scale-down top-16 bg-white rounded-b-2xl w-full drop-shadow-lg"
    let navClass = 'hidden'

    const navClick = function() {
        navState = !navState;

        if(navState){
            navClass = "absolute transform origin-top animate-scale-down top-16 pb-4 bg-white rounded-b-2xl w-full drop-shadow-lg"
        }else{
            navClass = "hidden"
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
        <ul class="flex flex-col gap-4 indent-4">
            <li>
                <a href="./">
                <div class="w-full">Home</div>
                </a>
            </li>
            <li class="w-full">
                <a href="./about">                
                <div class="w-full">About</div>
                </a>
            </li>
            <li class="w-full">
                <a href="./">
                <div class="w-full">Newest</div>
                </a>
            </li>
        </ul>
      </nav>
  </header>

  <slot />