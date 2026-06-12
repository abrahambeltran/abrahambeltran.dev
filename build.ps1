# Build static site into dist/
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
python manage.py distill-local dist --force --collectstatic
Write-Host "Build complete -> dist/"
