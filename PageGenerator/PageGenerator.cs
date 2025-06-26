using Statiq.Markdown;

namespace PageGenerator
{
    public class PageGenerator
    {
        public static async Task<int> Main(string[] args) =>
            await Bootstrapper
                .Factory
                .CreateDefault(args)
                .BuildPipeline("Render Markdown", builder => builder
                    .WithInputReadFiles("*.md")
                    .WithProcessModules(new RenderMarkdown())
                    .WithOutputWriteFiles(".html"))
                .RunAsync();
    }
}