import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const runImgeGenerator = async (
  prompt: string = "photo of offroad car, forest, sunset, clouds",
) => {
  const response = await replicate.run(
    "asiryan/realistic-vision-v6.0-b1:79840b7a2de6e3c5b4a5623cda51186fc532a8e64055cd7683b125eaeda3df53",
    {
      input: {
        width: 768,
        height: 512,
        prompt: prompt,
        strength: 1,
        scheduler: "K_EULER_ANCESTRAL",
        guidance_scale: 7.5,
        negative_prompt:
          "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck",
        use_karras_sigmas: true,
        num_inference_steps: 30,
      },
    },
  );
  console.log(response);
  return response;
};
