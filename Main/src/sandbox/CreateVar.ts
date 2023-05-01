function CreatVars1(file: string) {
  let out: String = file;
  out = out.replaceAll(" ", "_");
  out = out.replaceAll(".gtzip", "");
  out += '="' + file + '"';
}
