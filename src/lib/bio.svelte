<script>
    const birthday = new Date('11 Nov, 1986');
    // console.log(birthday);
    let age = (Math.floor((new Date() - birthday) / 3.15576e+10)); // magic number converts to years
    // console.log(age / 3.15576e+10);
</script>

<div class="bio">
    <div class="headline">
        <img src="propic2_sq.jpg" alt="A round self-portrait" class="profimg" />
        <div class="headlineText">
            <h2>I'm {age} years old, born in Merseyside, England.</h2>
            <ul class="headlineTags">
                <li>gamer</li>
                <li>designer</li>
                <li>developer</li>
                <li>manager</li>
                <li>sci-fi lover</li>
            </ul>
        </div>
        
    </div>
    
    <p>A jack of all trades, I get excited to learn a little about lots of things. I enjoy most the problem solving applications of technolgy, exploring the most efficient, cost-effective and user friendly ways to overcome a challenge using technological solutions.</p>
    <p>I'm a huge fan of games, and the gaming industry. I love to explore indie titles and follow their development, embarassingly I'm a sucker for early access (which is something I'm working on improving). I love massively multiplay online role-playing games, or social co-operative games so obviously PC, not console.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet quasi cupiditate. Quisquam, voluptates quos! Inventore, commodi repudiandae. Ab quae voluptate iste accusamus aliquid commodi molestiae totam sunt quidem enim modi fuga atque harum ea suscipit in, beatae quod veritatis illo praesentium numquam quo architecto eos iure. Alias quam eaque, quia nemo expedita deserunt minima accusamus officia corporis debitis itaque nulla suscipit asperiores qui error facere! Accusamus harum in debitis vero! Nostrum ab ut veritatis magni animi repellendus incidunt libero soluta labore ipsum numquam maxime cum, obcaecati placeat inventore dolorum veniam eos vel nesciunt. Possimus vero magni nemo corrupti vitae?</p>
</div>

<style type='scss'>
    .bio {
        margin-top: -10rem;

        display: flex;
        flex-direction: column;
    }

    .headline {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        @media only screen and (min-width: $breaktab) {
            flex-direction: row;
        }
        
        &Text {
            display:flex;
            flex-direction: column;
            margin-top: -2.5rem;
            @media only screen and (min-width: $breaktab) {
                margin: auto;
                margin-left: -3rem;
            }
            
            
            h2  {
                background: $col-bg;
                padding: 1rem;
                border: solid 0.5rem $col-a1;
                margin-bottom: 0;
                
                @media only screen and (min-width: $breaktab) {
                    padding-left: 3rem;
                }
            }
        }

        &Tags {
            list-style-type: none;
            display: inline-flex;
            padding: 0;
            margin: 0;
            flex-wrap: wrap;

            background: $col-a1;
            border: solid 0.5rem $col-a1;
            border-top: none;

            margin-left: auto;

            li {
                font-family: $font-mono;
                font-size: 0.8rem;
                color: $col-a1;
                background: $col-bg;
                // border: 1px solid $col-bg;
                border-radius: 0.5rem;
                padding: 0.25rem 0.5rem;
                margin: 0.25rem;
                opacity: 0.7;
            }
        }
    }
    
    .profimg {
        position: relative;
        width: 10rem;
        object-fit: contain;
        height: auto;

        margin: auto;
        margin-right: 0;
        // margin: auto 0 auto auto;
        border-radius: 50%;
        border: solid 0.5rem $col-a1;

        z-index: 1;
    }
</style>