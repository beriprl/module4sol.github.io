var names=new Array();
names[0]="Steven";
names[1]="Mark";
names[2]="Daniel";
names[3]="Thomas";
names[4]="john";
names[5]="nancy";
names[6]="amy";
names[7]="avril";
names[8]="linda";
names[9]="sarah";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}