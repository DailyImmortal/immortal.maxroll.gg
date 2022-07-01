window.onload = function () {
	var selectElement = document.querySelectorAll('select')[0];
	var iframeElement = document.querySelectorAll('iframe')[0];
	
	const pages = [
		"Diablo Immortal - Player vs Player Tips & Tricks - Maxroll.gg.html",
		"Diablo Immortal Adventurer Walkthrough - Maxroll.gg.html",
		"Diablo Immortal Armory System - Maxroll.gg.html",
		"Diablo Immortal Attributes & Stats Explained - Maxroll.gg.html",
		"Diablo Immortal Awakening & Resonance Legendary Gems - Maxroll.gg.html",
		"Diablo Immortal Barbarian Guide - Class Build Overview - Maxroll.gg.html",
		"Diablo Immortal Battle Pass & Shop Overview - Maxroll.gg.html",
		"Diablo Immortal Bestiary Walkthrough - maxroll.gg.html",
		"Diablo Immortal Bounties Overview - maxroll.gg.html",
		"Diablo Immortal Challenge Rifts Overview - Maxroll.gg - Resources Guides.html",
		"Diablo Immortal Charms Overview - Maxroll.gg Guides.html",
		"Diablo Immortal Class Overview - maxroll.gg.html",
		"Diablo Immortal Codex Guide - maxroll.gg.html",
		"Diablo Immortal Complete Dungeon Guide - maxroll.gg.html",
		"Diablo Immortal Complete Equipment Guide - Maxroll.gg.html",
		"Diablo Immortal Complete Leveling Guide Game Walkthrough - Maxroll.gg.html",
		"Diablo Immortal Crusader Guide - Maxroll.gg Class Build Overview.html",
		"Diablo Immortal Currencies & Crafting Materials - Maxroll.gg Guide.html",
		"Diablo Immortal Demon Hunter Guide - Maxroll.gg Class Build Overview.html",
		"Diablo Immortal Difficulties Overview - Maxroll.gg Resources Guides.html",
		"Diablo Immortal Elder Rifts Overview - maxroll.gg.html",
		"Diablo Immortal Elite Monsters & Affixes Monsters and Affixes - Maxroll.gg.html",
		"Diablo Immortal Essence Transfer Mechanics Guide - Maxroll.gg.html",
		"Diablo Immortal Gambling Walkthrough Guide - Maxroll.gg.html",
		"Diablo Immortal Helliquary Walkthrough - Maxroll.gg Resources Guides.html",
		"Diablo Immortal Hilts Overview - Maxroll.gg - Resources Guides.html",
		"Diablo Immortal Immortals Walkthrough - Maxroll.gg Resources Guides.html",
		"Diablo Immortal Lairs Guide - Maxroll.gg.html",
		"Diablo Immortal Legacy of the Horadrim - maxroll.gg.html",
		"Diablo Immortal Legendary Items - Maxroll.gg.html",
		"Diablo Immortal Marketplace & Trading Overview - Maxroll.gg.html",
		"Diablo Immortal Monk Guide - Maxroll.gg Class Build Overview.html",
		"Diablo Immortal Necromancer Guide - Maxroll.gg Class Build Overview.html",
		"Diablo Immortal Normal & Legendary Gems - Maxroll.gg.html",
		"Diablo Immortal Paragon & Experience Overview - Maxroll.gg.html",
		"Diablo Immortal Path of Blood Build Guides - Maxroll.gg.html",
		"Diablo Immortal Player vs Player Battlegrounds - Maxroll.gg.html",
		"Diablo Immortal Powering Up and Daily Routine - Maxroll.gg.html",
		"Diablo Immortal Powering Up at Level 60 - Maxroll.gg.html",
		"Diablo Immortal Runes Overview - Maxroll.gg Rune Guide and Overview.html",
		"Diablo Immortal Set Items Guide - Maxroll.gg.html",
		"Diablo Immortal Shadow War - Maxroll.gg.html",
		"Diablo Immortal Shadows Walkthrough - maxroll.gg.html",
		"Diablo Immortal Side Quest Guide - Maxroll.gg.html",
		"Diablo Immortal Social_ Clans, Warbands & Party Systems - Maxroll.gg.html",
		"Diablo Immortal Speedrun to Lassal - Maxroll.gg.html",
		"Diablo Immortal Speedrun to Level 60 Guide - Maxroll.gg.html",
		"Diablo Immortal Upgrading & Reforging Guide - Maxroll.gg.html",
		"Diablo Immortal Vault Overview - Maxroll.gg Resource Guides.html",
		"Diablo Immortal Wizard Guide - Maxroll.gg Class Build Overview.html",
		"Diablo Immortal Zone Events - Maxroll.gg Resources.html",
	]
	
	for (var i = 0; i < pages.length; i++) {
		var opt = document.createElement("option");
		opt.value= i;
		opt.innerHTML = pages[i];
		selectElement.appendChild(opt);
	}
	
	iframeElement.src = "content/" + pages[0]
	
	selectElement.addEventListener("change", function() {
		iframeElement.src = "content/" + pages[selectElement.value];
	});
};