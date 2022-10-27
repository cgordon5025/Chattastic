console.log("hello")

let ChatEngine;
ChatEngine = ChatEngineCore.create({
publishKey: 'pub-c-1ec1a0aa-1745-4f40-bf2f-45021d89be5b',
subscribeKey: 'sub-c-2032760e-5bfe-4054-81dd-5d9ea84edec6'
})

let newPerson = generatePerson(true);

{/* <script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
<script src="node_modules/chat-engine/dist/chat-engine.js"></script> */}