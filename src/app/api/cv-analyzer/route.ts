import getContext from "@/server/context";
import cvAnalyzerController from "@/server/controllers/cv_analyzer";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { apiKey, jobUrl, base64URI, keyType } = await req.json();

    const headers = {
      apikey: apiKey,
      keytype: keyType,
    };

    const context = getContext(headers);

    const result = await cvAnalyzerController.analyze(
      {
        jobUrl,
        base64URI,
      },
      context
    );

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.log("error", error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
