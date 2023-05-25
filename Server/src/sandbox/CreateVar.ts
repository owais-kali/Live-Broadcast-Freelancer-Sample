export function CreateVars1(file: string): String {
  let out: String = file;
  out = out.replaceAll(" ", "_");
  out = out.replaceAll(".gtzip", "");
  out += '="' + file + '"';
  return out;
}

export function CreateVars2(file: string): String {
  let out: String = file;
  out += ':"' + file + '",';
  return out;
}



