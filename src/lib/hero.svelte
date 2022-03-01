<!-- https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`; -->
<!-- https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-02-25&api_key=DEMO_KEY -->
<!-- <script context="module">
    export async function load({ fetch }) {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/1`
        );
        const fake = await res.json;
        console.log(fake);

        if (res.ok) return { 
            props: { 
                title: await res.json() 
            } 
        };
        return {
            status: res.status,
            error: new Error(),
        };
    }
</script>

<script>
    export let title;
    console.log(title);
</script> -->

<div class="hero">
    <div class="hero__bg">
        <img src="" alt="" />
    </div>
    
</div>
<div class="hero__spacer" />

<style lang="scss">
    .hero {
        height: 30rem;
        // width: calc(100% + 2rem);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;

        &__bg {
            clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
            background: linear-gradient(
                -86deg,
                rgb(0, 71, 129) 0%,
                rgba(6, 188, 193, 1) 100%
            );
            width: 100%;
            height: 100%;
        }

        &__spacer {
            padding-bottom: 23rem;
        }
    }
</style>
