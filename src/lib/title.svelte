<script>
    export let title = "Ninja Gaming";
</script>

<div class="title">
    <div class="title__icon"></div>
    <div class="title__text">{title}</div>
</div>

<style type='scss'>
    .title {
        display: flex;
        margin-bottom: 8em;
        
        &__icon {
            $iconsize: 30rem;
            $iconcolor: $tint-50;
            width: 0px;
            height: 0px;
            border-right: $iconsize solid transparent;
            border-top: $iconsize solid $iconcolor;
            border-left: $iconsize solid $iconcolor;
            border-bottom: $iconsize solid $iconcolor;
            border-top-left-radius: $iconsize;
            border-top-right-radius: $iconsize;
            border-bottom-left-radius: $iconsize;
            border-bottom-right-radius: $iconsize;
            position: absolute;
            top: -26rem;
            left: -32rem;
            transform: rotate(55deg);
        }

        &__text {
            font-family: $font-script;
            position: absolute;
            top: 1rem;
            left: 3rem;

            background: rgb(255,186,8);
            background: linear-gradient(153deg, rgba(255,186,8,1) 0%, rgba(6,188,193,1) 100%); 
            font-size: 6em;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
    }
</style>
