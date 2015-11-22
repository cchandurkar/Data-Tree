var dope = require("../");

dope.hideCursor();

dope.log("dope.log");
dope.write("dope.write\n");
dope.error("dope.error");

dope.red.log("dope.red.log");
dope.red.write("dope.red.write\n");
dope.red.error("dope.red.error");

dope.red.underline.log("dope.red.underline.log");
dope.red.underline.write("dope.red.underline.write\n");
dope.red.underline.error("dope.red.underline.error");

dope.bold.italic.log("dope.bold.italic.log");
dope.bold.italic.write("dope.bold.italic.write\n");
dope.bold.italic.error("dope.bold.italic.error");

dope.negative.log("dope.negative.log");
dope.negative.write("dope.negative.write\n");
dope.negative.error("dope.negative.error");

dope.bold.log("dope.bold.log");
dope.bold.magenta.log("dope.bold.magenta.log", "with", { multiple: "ARGS" });
dope.bold.underline.blue.log("dope.%s.underline.%s.log using format string", "bold", "blue");

dope.log("dope.log %underline{%s} inside format string", "underline");
dope.error("dope.error %underline{%s} inside %underline{format} string", "underline");
dope.underline.log("dope.underline.log with %blue{blue} inside the string");

dope.column(10).log("dope.column(10).log");
dope.column(10).write("dope.column(10).write\n");
dope.column(10).error("dope.column(10).error");

dope.log(1);
dope.write(2);
dope.error(3);

dope.write("this is a line innit");
dope.clearLine.column(1).log("dope.clearLine.column(1).log");

dope.showCursor();
