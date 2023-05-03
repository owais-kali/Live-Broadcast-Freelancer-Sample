export function CreatVars1(file: string): String {
  let out: String = file;
  out = out.replaceAll(" ", "_");
  out = out.replaceAll(".gtzip", "");
  out += '="' + file + '"';
  return out;
}

export function CreatVars2(file: string): String {
  let out: String = file;
  out += ':"' + file + '",';
  return out;
}


