from pathlib import Path
import shutil
root = Path(__file__).resolve().parents[1]
dist = root / "dist"
if dist.exists(): shutil.rmtree(dist)
dist.mkdir()
for name in ["index.html", "app.js", "display.js", "style.css", "scene.css", "cinematic.css", "cinematic-harbor.png", "harbor.svg", "harbor-docked.svg", "harbor-departure.svg", "campaign"]:
    source = root / name
    if source.is_dir(): shutil.copytree(source, dist / name)
    else: shutil.copy2(source, dist / name)
print("Static runtime copied to dist; nothing deployed.")
