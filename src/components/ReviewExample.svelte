<script>
    export let text = "Insert Review Here"
    export let image = "logo.png"

    let randomInd = Math.random();
</script>

<!-- <div class="grid grid-cols-2 mx-10 bg-gray-50 w-full m-10" style="width: 1000px;">
    <div class="left-0 rounded" style="width: 400px; height: 400px; background-image: url({image});" id="image">
    </div>
    <div class="flex justify-end items-center">
        <div class="relative bubble-bottom-left flex justify-end items-center p-10 rounded-3xl" style="background-color: #ef4444">
            <p class="text-left text-3xl text-white font-bold leading-relaxed">{text}</p>
        </div>
        <img class="bottom-0 m-10 rounded-full object-cover" src="https://source.unsplash.com/random/50x50/?portrait" alt="" style="width: 75px; height: 75px;"/>
    </div>
</div> -->

<div class="w-full">
    <div class="flex justify-row items-center justify-center px-50">
        <div class="left-0 rounded m-5" style="background-image: url({image});" id="image">
        </div>
        <div class="flex justify-end items-center m-5">
            <div class="relative bubble-bottom-left flex justify-end items-center p-10 rounded-3xl w-96" style="background-color: #ef4444">
                <p class="text-left text-xl text-white font-bold leading-relaxed">{text}</p>
            </div>
            <img class="bottom-0 m-10 rounded-full object-cover" src="https://source.unsplash.com/random/50x50/?face/{randomInd}" alt="" style="width: 75px; height: 75px;"/>
        </div>
    </div>
</div>

<style>
    #image {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        width: 400px;
        height: 400px;
    }

    .bubble-bottom-left:before {
        content: "";
        width: 0px;
        height: 0px;
        margin-top: 70px;
        position: absolute;
        border-right: 24px solid #ef4444;
        border-left: 12px solid transparent;
        border-top: 12px solid #ef4444;
        border-bottom: 20px solid transparent;
        right: -30px;
        rotate: -90deg;
    }
</style>