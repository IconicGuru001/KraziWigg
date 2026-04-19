
import { supabase } from "../lib/supabase";

export default function Upload() {
  const upload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const name = Date.now()+".mp4";
    await supabase.storage.from("videos").upload(name, file);

    const url = supabase.storage.from("videos").getPublicUrl(name).data.publicUrl;

    await supabase.from("videos").insert({ title:"New Video", url });

    alert("Uploaded!");
  };

  return (
    <div style={{ padding:20 }}>
      <h1>Upload</h1>
      <input type="file" accept="video/*" onChange={upload}/>
    </div>
  );
}
