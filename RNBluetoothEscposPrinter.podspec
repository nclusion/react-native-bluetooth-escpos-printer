require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RNBluetoothEscposPrinter"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.author       = 'januslo'
  s.homepage     = 'https://github.com/jundelikwo/react-native-bluetooth-escpos-printer'
  s.license      = package["license"]
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/jundelikwo/react-native-bluetooth-escpos-printer", :tag => "#{s.version}" }
  s.source_files = "ios/**/*.{h,c,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency 'ZXingObjC/Aztec'
  s.dependency 'ZXingObjC/Core'
  s.dependency 'ZXingObjC/DataMatrix'
  s.dependency 'ZXingObjC/MaxiCode'
  s.dependency 'ZXingObjC/OneD'
  s.dependency 'ZXingObjC/PDF417'
  s.dependency 'ZXingObjC/QRCode'
end
