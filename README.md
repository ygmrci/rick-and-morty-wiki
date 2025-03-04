# İçeriği doğrudan PowerShell ile ekleyelim
@"
# Rick and Morty Wiki

Bu proje, Rick and Morty API'sini kullanarak karakterleri listeleyen ve detaylarını gösteren bir web uygulamasıdır.

## Özellikler

- Karakter listesi görüntüleme
- Karakter arama
- Durum ve tür filtreleme
- Karakter detay sayfası
- Responsive tasarım
# Rick and Morty Wiki

Modern ve kullanıcı dostu arayüzü ile Rick and Morty  karakterleri keşfet!


## Kullanılan Teknolojiler

- Next.js 14
- React
- Bootstrap
- Axios
- Rick and Morty API

## Kurulum

\`\`\`bash
# Repository'yi klonlayın
git clone https://github.com/ygmrci/rick-and-morty-wiki.git

# Proje dizinine gidin
cd rick-and-morty-wiki

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
\`\`\`

## Kullanım

Uygulama http://localhost:3000 adresinde çalışacaktır.
"@ | Out-File -FilePath README.md -Encoding UTF8