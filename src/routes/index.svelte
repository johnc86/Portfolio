<script>

</script>

<div class="index">
    <div class="template-border"></div>
    <div class="hero">
        <div class="hero_1">Design</div>
        <div class="hero_2">Web</div>
        <div class="hero_3">Projects</div>
    </div>
</div>

<style type='scss'>
    .hero{
        font-family: $font-playful;
        font-size: 3em;

        display: flex;
        flex-direction: column;
        margin-top: 20rem;
        margin-left: 10rem;

        &>* {
            display: flex;
            margin-top: 1rem;
            padding: 0.5rem 2rem;
        }

        &_1{
            background: $col-red;
            margin:auto;
        }
    }

    .template-border {
        @include absCenter;
        height: 30em;
        width: 40em;
        border-radius: 1rem;
        background-color: #000;
        border: 3rem solid #000;
        z-index: -2;

        overflow: hidden;

        &:after {
        content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%/10%;
            background-color: $col-bg;
            z-index: -1;

            overflow: hidden;
        }
    }
</style>
