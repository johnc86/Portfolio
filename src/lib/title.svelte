<script>
    import Nav from "$lib/nav.svelte";
</script>

<div class="title">
    <div class="title__bg"></div>
    <div class="title__text">John Callaghan</div>
</div>
<Nav />
<div class="title__margin"></div>


<style type='scss'>
    .title {
        $growthrate: 15vw;

        position: fixed;
        display: flex;
        width: 100%;
        
        &__bg {
            background: hsla(0, 0%, 0%, 0.8);
            position: absolute;
            top:  -15em;
            left: 0;
            width: 110%;
            height: 16em;
            transform: rotate(8deg) translateY(clamp(4em,$growthrate,7.5em));
        }

        &__text {
            @include container;
            font-size: clamp(3.5rem,$growthrate,7rem);

            font-family: $font-script;
            position: relative;
            text-align: right;
            white-space: nowrap;

            background: rgb(255,186,8);
            background: linear-gradient(153deg, rgba(255,186,8,1) 0%, rgba(6,188,193,1) 100%); 
            color: $col-white;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        &__margin {
            position: relative;
            // margin-bottom: $growthrate;
            height: clamp(4em,$growthrate,7.5em);
            margin-bottom: 4em;
            // background: yellow;
        }
    }
</style>
