

const scriptsInEvents = {

	async EventSheet1_Event31_Act3(runtime, localVars)
	{
		let timer = runtime.globalVars.timer;
		
		if (timer <= 0) {
		    runtime.goToLayout("gameover"); 
		}
	},

	async EventSheet1_Event32_Act2(runtime, localVars)
	{
		runtime.goToLayout("win");
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
