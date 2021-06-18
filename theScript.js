	//Variables
	var theOriginalString;
	var theDividedString;
	var theTestSplit;
	var theQuestionType;
	var theSearchingWebsite = "none";
	var count;
	var outerCount;
	var innerCount;
	var theDoubleFlag;
	var theLibNumber = -1;
	var theSearchingURL;
	var puttingValue = "";
	var theSearchingWord = new Array();
	var currentPageFlag = false;
	var currentURL;
	var theSiteNumber;
	var NWTypeLib = new Array();
	var translatedFrom = "none";
	var translatedTo = "none";
	var translatedFromNumber = 0;
	var translatedToNumber;
	//Libralies
	var NWTypeLib = new Array();
	NWTypeLib[0] = "definition";
	NWTypeLib[1] = "synonym";
	NWTypeLib[2] = "synonyms";
	NWTypeLib[3] = "video";
	NWTypeLib[4] = "videos";
	NWTypeLib[5] = "picture";
	NWTypeLib[6] = "pictures";
	NWTypeLib[7] = "photo";
	NWTypeLib[8] = "photos";
	NWTypeLib[9] = "meaning";
	var NWTypeGroupLib = new Array();
	NWTypeGroupLib[0] = "http://dictionary.reference.com/browse/puttingValue?s=t";
	NWTypeGroupLib[1] = "http://thesaurus.com/browse/puttingValue";
	NWTypeGroupLib[2] = "http://thesaurus.com/browse/puttingValue";
	NWTypeGroupLib[3] = "http://www.youtube.com/results?search_query=puttingValue";
	NWTypeGroupLib[4] = "http://www.youtube.com/results?search_query=puttingValue";
	NWTypeGroupLib[5] = "https://www.google.com/search?hl=en&site=imghp&tbm=isch&biw=1440&bih=693&q=puttingValue";
	NWTypeGroupLib[6] = "https://www.google.com/search?hl=en&site=imghp&tbm=isch&biw=1440&bih=693&q=puttingValue";
	NWTypeGroupLib[7] = "https://www.google.com/search?hl=en&site=imghp&tbm=isch&biw=1440&bih=693&q=puttingValue";
	NWTypeGroupLib[8] = "https://www.google.com/search?hl=en&site=imghp&tbm=isch&biw=1440&bih=693&q=puttingValue";
	NWTypeGroupLib[9] = "http://dictionary.reference.com/browse/puttingValue?s=t";
	var NWTypeShortGroupLib = new Array();
	NWTypeShortGroupLib[0] = "dictionary.references.com";
	NWTypeShortGroupLib[1] = "thesaurus.com";
	NWTypeShortGroupLib[2] = "thesaurus.com";
	NWTypeShortGroupLib[3] = "youtube.com";
	NWTypeShortGroupLib[4] = "youtube.com";
	NWTypeShortGroupLib[5] = "site=imghp";
	NWTypeShortGroupLib[6] = "site=imghp";
	NWTypeShortGroupLib[7] = "site=imghp";
	NWTypeShortGroupLib[8] = "site=imghp";
	NWTypeShortGroupLib[9] = "dictionary.references.com";
	var NWTypeSpaceLib = new Array();
	NWTypeSpaceLib[0] = "%20";
	NWTypeSpaceLib[1] = "%20";
	NWTypeSpaceLib[2] = "%20";
	NWTypeSpaceLib[3] = "+";
	NWTypeSpaceLib[4] = "+";
	NWTypeSpaceLib[5] = "+";
	NWTypeSpaceLib[6] = "+";
	NWTypeSpaceLib[7] = "+";
	NWTypeSpaceLib[8] = "+";
	NWTypeSpaceLib[9] = "%20";
	var ENTypeLib = new Array();
	ENTypeLib[0] = "google";
	ENTypeLib[1] = "youtube";
	ENTypeLib[2] = "duckduckgo";
	ENTypeLib[3] = "yahoo";
	ENTypeLib[4] = "yahoo!";
	ENTypeLib[5] = "maps";
	ENTypeLib[6] = "map";
	ENTypeLib[7] = "wikipedia";
	ENTypeLib[8] = "Wikipedia";
	ENTypeLib[9] = "dictionary";
	var ENTypeGroupLib = new Array();
	ENTypeGroupLib[0] = "https://www.google.cl/#q=puttingValue";
	ENTypeGroupLib[1] = "http://www.youtube.com/results?search_query=puttingValue";
	ENTypeGroupLib[2] = "https://duckduckgo.com/?q=puttingValue";
	ENTypeGroupLib[3] = "http://search.yahoo.com/search;_ylt=A0oG7iikWTNSe3wAS30qk6B4?p=puttingValue";
	ENTypeGroupLib[4] = "http://search.yahoo.com/search;_ylt=A0oG7iikWTNSe3wAS30qk6B4?p=puttingValue";
	ENTypeGroupLib[5] = "https://www.google.com/maps#!q=puttingValue";
	ENTypeGroupLib[6] = "https://www.google.com/maps#!q=puttingValue";
	ENTypeGroupLib[7] = "http://en.wikipedia.org/wiki/puttingValue";
	ENTypeGroupLib[8] = "http://en.wikipedia.org/wiki/puttingValue";
	ENTypeGroupLib[9] = "http://dictionary.reference.com/browse/puttingValue?s=t";
	var ENTypeShortGroupLib = new Array();
	ENTypeShortGroupLib[0] = "google.com";
	ENTypeShortGroupLib[1] = "youtube.com";
	ENTypeShortGroupLib[2] = "duckduckgo.com";
	ENTypeShortGroupLib[3] = "yahoo.com";
	ENTypeShortGroupLib[4] = "yahoo.com";
	ENTypeShortGroupLib[5] = "maps#!";
	ENTypeShortGroupLib[6] = "maps#!";
	ENTypeShortGroupLib[7] = "wikipedia.org";
	ENTypeShortGroupLib[8] = "wikipedia.org";
	ENTypeShortGroupLib[9] = "dictionary.reference.com";
	var ENTypeSpaceLib = new Array();
	ENTypeSpaceLib[0] = "+";
	ENTypeSpaceLib[1] = "+";
	ENTypeSpaceLib[2] = "+";
	ENTypeSpaceLib[3] = "+";
	ENTypeSpaceLib[4] = "+";
	ENTypeSpaceLib[5] = "+";
	ENTypeSpaceLib[6] = "+";
	ENTypeSpaceLib[7] = "_";
	ENTypeSpaceLib[8] = "_";
	ENTypeSpaceLib[9] = "%20";
	var PTypeLib = new Array();
	PTypeLib[0] = "person";
	PTypeLib[1] = "song";
	PTypeLib[2] = "songs";
	PTypeLib[3] = "place";
	PTypeLib[4] = "places";
	var PTypeGroupLib = new Array();
	PTypeGroupLib[0] = "https://www.google.cl/#q=puttingValue";
	PTypeGroupLib[1] = "http://www.youtube.com/results?search_query=puttingValue";
	PTypeGroupLib[2] = "http://www.youtube.com/results?search_query=puttingValue";
	PTypeGroupLib[3] = "https://www.google.com/maps#!q=puttingValue";
	PTypeGroupLib[4] = "https://www.google.com/maps#!q=puttingValue";
	var PTypeSpaceLib = new Array();
	PTypeSpaceLib[0] = "+";
	PTypeSpaceLib[1] = "+";
	PTypeSpaceLib[2] = "+";
	PTypeSpaceLib[3] = "+";
	PTypeSpaceLib[4] = "+";
	var KPTypeList = new Array();
	KPTypeList[0] = "word";
	KPTypeList[1] = "words";
	var STypeGroupLib = new Array();
	STypeGroupLib[0] = "http://translate.google.com/#translatedFrom/translatedTo/puttingValue";
	var STypeShortLib = new Array();
	STypeShortLib[0] = "translate.google.com";
	var STypeSpaceLib = new Array();
	STypeSpaceLib[0] = "%20";
	var theLanguageList = new Array();
	theLanguageList[0] = "english";
	theLanguageList[1] = "japanese";
	theLanguageList[2] = "spanish";
	var theLanguageRealList = new Array();
	theLanguageRealList[0] = "en";
	theLanguageRealList[1] = "ja";
	theLanguageRealList[2] = "es";
	theLanguageRealList[100] = "auto";
	//A1-Getting String
	theOriginalString = prompt("Write something that makes sense in English.\n It should start with the word \"Search\".\nTo see examples, type in \"show examples\" and click OK.\n\nSearch");
	if (theOriginalString !== null && theOriginalString !== "" && theOriginalString.toLowerCase() != "show examples") {
		//A2-Replacing Strange Characters and Strings
		theOriginalString = theOriginalString.replace(/ﾂ･?/g, '');
		//A3-Put "search" if the original string doesn't have one
		theTestSplit = theOriginalString.split(" ");
		if (theTestSplit[0].toLowerCase() != "search") {
			theOriginalString = "search " + theOriginalString;
		}
		//A4-Dividing the String
		theDividedString = theOriginalString.split(" ");
		//B1-Search for words type Noun Website to determine
		//If detected as question type NW than searching website is decided
		for (outerCount = 0; outerCount < NWTypeLib.length; outerCount++) {
			for (count = 0; count < theDividedString.length; count++) {
				if (NWTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count + 1] == "of") {
					theQuestionType = "NW";
					theSearchingWebsite = NWTypeLib[outerCount];
					theDividedString[count] = "Taken";
					theDividedString[count + 1] = "Taken";
					theLibNumber = outerCount;
					if (theDividedString[count - 1] == "the"){
						theDividedString[count - 1] = "Taken";
					}
				}
			}
		}
		//B2-Set the Question type as End Website if theQUestionType
		//If so than searching website is decided
		for (outerCount = 0; outerCount < ENTypeLib.length; outerCount++) {
			for (count = 0; count < theDividedString.length; count++) {
				if (ENTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count - 1] == "on" || ENTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count - 1] == "in") {
					if (theQuestionType == "NW") {
						theDoubleFlag = true;
					} else {
						theQuestionType = "EN";
						theDoubleFlag = false;
					}
					theSearchingWebsite = ENTypeLib[outerCount];
					theDividedString[count] = "Taken";
					theDividedString[count - 1] = "Taken";
					theLibNumber = outerCount;
				}
				if (ENTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count - 1] == "the" && theDividedString[count - 2] == "on" || ENTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count - 1] == "the" && theDividedString[count - 2] == "in") {
					if (theQuestionType == "NW") {
						theDoubleFlag = true;
					} else {
						theQuestionType = "EN";
						theDoubleFlag = false;
					}
					theSearchingWebsite = ENTypeLib[outerCount];
					theDividedString[count] = "Taken";
					theDividedString[count - 1] = "Taken";
					theDividedString[count - 2] = "Taken";
					theLibNumber = outerCount;
				}
			}
		}
		//B3-Deal with double
		if (theDoubleFlag === true) {
			theQuestionType = "NW";
		}
		//B4-Delete the word right after "Search"
		for (count = 0; count < theDividedString.length; count++) {
			if (theDividedString[count].toLowerCase() == "for" && theDividedString[count - 1].toLowerCase() == "search" || theDividedString[count].toLowerCase() == "about" && theDividedString[count - 1].toLowerCase() == "search") {
				theDividedString[count] = "Taken";
			}
		}
		//B5-Define the Searching Word
		//Replace the "Search"
		theDividedString[0] = "Taken";
		//B6-See if the question type is Plus
		for (outerCount = 0; outerCount < PTypeLib.length; outerCount++) {
			for (count = 0; count < theDividedString.length; count++) {
				if (PTypeLib[outerCount] == theDividedString[count].toLowerCase() && theDividedString[count - 1].toLowerCase() == "the" && theDividedString[count + 1] != "theSearchingWord") {
					theSearchingWebsite = PTypeLib[outerCount];
					theQuestionType = "P";
					theDividedString[count] = "Taken";
					theDividedString[count - 1] = "Taken";
					theLibNumber = outerCount;
				}
			}
		}
		//B7-Delete the word after "the" if it is on Kind of P TypeList
		for (outerCount = 0; outerCount < KPTypeList.length; outerCount++) {
			for (count = 0; count < theDividedString.length; count++) {
				if (theDividedString[count] == KPTypeList[outerCount] && theDividedString[count - 1] == "the") {
					theDividedString[count] = "Taken";
					theDividedString[count - 1] = "Taken";
				}
			}
		}
		//B8-Translator
		for (outerCount = 0; outerCount < theDividedString.length; outerCount++) {
			for (count = 0; count < theLanguageList.length; count++) {
				if (theDividedString[outerCount].toLowerCase() == theLanguageList[count] && theDividedString[outerCount - 1] == "in") {
					theQuestionType = "S";
					theLibNumber = 0;
					translatedTo = theLanguageList[count];
					translatedToNumber = count;
					theDividedString[outerCount] = "Taken";
					theDividedString[outerCount - 1] = "Taken";
				}
			}
			if (translatedFromNumber === 0) {
				translatedFromNumber = 100;
			}
		}
		for (count=0; count<theDividedString.length;count++){
			if (theDividedString[count].toLowerCase() == "how" && theDividedString[count+1] == "to" && theDividedString[count+2] == "say"){
				theDividedString[count] = "Taken";
				theDividedString[count + 1] = "Taken";
				theDividedString[count + 2] = "Taken";
			}
		}
		//B9-On.the.site command
		for (count = 0; count < theDividedString.length; count++) {
			if (theLibNumber == -1) {
				currentURL = document.URL;
				for (innerCount = 0; innerCount < NWTypeShortGroupLib.length; innerCount++) {
					if (currentURL.indexOf(NWTypeShortGroupLib[innerCount]) !== -1) {
						theLibNumber = innerCount;
						theQuestionType = "NW";
					}
					if (currentURL.indexOf(ENTypeShortGroupLib[innerCount]) !== -1) {
						theLibNumber = innerCount;
						theQuestionType = "EN";
					}
				}
			}
		}
		//B10-Search on google if the Searching Website is empty   
		if (theLibNumber == -1) {
			theLibNumber = 0;
			theQuestionType = "EN";
		}
		//B11-Define the Searching Word(s)
		innerCount = 0;
		for (count = 0; count < theDividedString.length; count++) {
			if (theDividedString[count] != "Taken") {
				theSearchingWord[innerCount] = theDividedString[count];
				innerCount++;
			}
		}
		//C1-Make up the putting Value
		for (count = 0; count < theSearchingWord.length; count++) {
			puttingValue = puttingValue + theSearchingWord[count];
			if (count < theSearchingWord.length - 1) {
				if (theQuestionType == "NW") {
					puttingValue = puttingValue + NWTypeSpaceLib[theLibNumber];
				}
				if (theQuestionType == "EN") {
					puttingValue = puttingValue + ENTypeSpaceLib[theLibNumber];
				}
				if (theQuestionType == "P") {
					puttingValue = puttingValue + PTypeSpaceLib[theLibNumber];
				}
				if (theQuestionType == "S") {
					puttingValue = puttingValue + STypeSpaceLib[theLibNumber];
				}
			}
		}
		//C2-Decide the Searching URL
		if (theQuestionType == "NW") {
			theSearchingURL = NWTypeGroupLib[theLibNumber];
		}
		if (theQuestionType == "EN") {
			theSearchingURL = ENTypeGroupLib[theLibNumber];
		}
		if (theQuestionType == "P") {
			theSearchingURL = PTypeGroupLib[theLibNumber];
		}
		if (theQuestionType == "S") {
			theSearchingURL = STypeGroupLib[theLibNumber];
		}
		//C3-Replace with putting Value
		theSearchingURL = theSearchingURL.replace("puttingValue", puttingValue);
		//C4-TranslatingQuestionType
		if (theQuestionType == "S" && theLibNumber === 0) {
			theSearchingURL = theSearchingURL.replace("translatedFrom", theLanguageRealList[translatedFromNumber]);
			theSearchingURL = theSearchingURL.replace("translatedTo", theLanguageRealList[translatedToNumber]);
		}
		//C5-Open the page
		window.open(theSearchingURL);
	}
	if (theOriginalString.toLowerCase() == "show examples"){
		alert("Search about steve jobs on the wikipedia\nSearch videos of the song Hello Goodbye by beatles\nSearch civilization in Spanish\nSearch the definition of the word television\nSearch synonyms of sleepy\nSearch pictures of cute cats\nSearch how to quilt in YouTube\nSearch New York City on the map\nSearch how to say hello in spanish\nSearch hello kitty on yahoo!\n\n  and much much more.");
	}