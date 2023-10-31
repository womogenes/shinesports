<script>
    export let text = "Insert Review Here"
    export let image = "logo.png"
</script>

<div class="grid grid-cols-2 mx-10" style="width: 1000px;">
    <div class="left-0 rounded" style="width: 400px; height: 400px; background-image: url({image});" id="image">
    </div>
    <div class="flex justify-end items-center">
        <div class="relative bubble-bottom-left flex bg-white justify-end items-center p-10 rounded-3xl">
            <p class="text-left text-3xl text-black leading-relaxed">{text}</p>
        </div>
        <img class="bottom-0 m-10 rounded-full object-cover" src="https://source.unsplash.com/random/50x50/?portrait" alt="" style="width: 75px; height: 75px;"/>
    </div>

</div>

<style>
    #image {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
    }

    .bubble-bottom-left:before {
        content: "";
        width: 0px;
        height: 0px;
        margin-top: 75px;
        position: absolute;
        border-right: 24px solid #fff;
        border-left: 12px solid transparent;
        border-top: 12px solid #fff;
        border-bottom: 20px solid transparent;
        right: -23px;
        rotate: -90deg;
    }
</style>