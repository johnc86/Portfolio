<script>
    let showMobMenu = false
</script>


<header on:click={() => showMobMenu = !showMobMenu}>
    <div class="header__bg"></div>

    <button class="nav__button" >
        <svg version="1.1" class="nav__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 122.879 103.609" enable-background="new 0 0 122.879 103.609" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"/></g></svg>
        <!-- <span class="nav__button-label">
            Menu
        </span> -->
    </button>

    <div class="title">
        <div class="title__text">
            John Callaghan
        </div>
    </div>

</header>
<nav>
    <div class="nav__content">
        <ul class="nav__links" class:showMobMenu >
            <li>Blog</li>
            <li>Work</li>
            <li>History</li>
            <li>Contact</li>
        </ul>
    </div>
</nav>

<style type='scss'>
    $headerbg: hsla(0,0%,0%,60%);

    header {
        position: sticky;
        top: 0;
        width: 100%;
        display: flex;
        @media only screen and (min-width: $breaktab) {
            flex-direction: column;
        }
        z-index: 2;
    }

    .header__bg {
        clip-path: polygon(0 0,100% 0,100% 100%,0 40%);

        width: 100%;
        height: 100%;
        position: absolute;
        background: $headerbg;
        z-index: 1;
    }

    .nav__button {
        position: absolute;
        z-index: 2;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);

        border: none;
        background: $headerbg;
        padding: 1rem;
        
        display: flex;
        @media only screen and (min-width: $breaktab) {
            display: none;
        }
    }

    .title {
        display: flex;
        width: 100%;
        z-index: 2;

        &__text {
            font-size: clamp(3.5rem,$growthrate,7rem);
            font-family: $font-script;
            
            margin: auto 1rem auto auto;
            width: 100%;

            @include container;
            // position: relative;

            text-align: right;
            white-space: nowrap;
            background: rgb(255,186,8);
            background: linear-gradient(153deg, rgba(255,186,8,1) 0%, rgba(6,188,193,1) 100%);
            color: $col-white;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    nav {
        margin: auto;
        // transform: translateY(max(-7em,{- (scrolly / 20)}em));
    }

    .nav {
        &__content {
            @include container;
            margin: 0 auto;
        }

        &__icon {
            width: 1.5rem;
            height: 1.5rem;
            fill: $col-white;
        }

        &__links {
            // background: $col-bg;
            display: none;
            @media only screen and (min-width: $breaktab) {
                display: flex;
            }
        }
    }

    .showMobMenu {
        display: flex;
    }
</style>
