ANDROID_DIR	= ./android
IOS_DIR			= ./ios

PORT        = 50300

clean:
	# killall Xcode
	xcrun -k
	# xcodebuild -alltargets clean
	rm -rf "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang/ModuleCache"
	rm -rf "$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang.$(whoami)/ModuleCache"
	rm -rf ~/Library/Developer/Xcode/DerivedData/*
	rm -rf ~/Library/Caches/com.apple.dt.Xcode/*
	rm -rf $(IOS_DIR)/build $(ANDROID_DIR)/build
	rm -rf $(TMPDIR)/react-*
	rm -rf $(TMPDIR)/metro-bundler-cache-*
	rm -rf $(TMPDIR)/haste-map-react-native-packager-*
	# watchman watch-del-all

reset-pods:
	cd $(IOS_DIR) && \
	rm -rf "${HOME}/Library/Caches/CocoaPods" && \
	rm -rf "`pwd`/Pods" && \
	bundle install && \
	bundle exec pod update && \
	bundle exec pod install

reset-npm-packages:
	rm -rf node_modules
	yarn install

clean-and-reset-all: clean reset-npm-packages reset-pods

server:
	@react-native start --port=${PORT}

server-and-reset-cache:
	npx react-native start --reset-cache

# add --scheme "Blah" to specify a scheme
run-ios:
	npx react-native run-ios --port=${PORT}

run-android:
	npx react-native run-android

run-all: run-ios run-android

lint: 
	npx tslint --project tsconfig.json *.ts src/**/*.{ts,tsx} src/**/**/*.{ts,tsx} --exclude .hygen.js

test:
	npx jest --runInBand

ts-check:
	npx tsc --project tsconfig.json --outDir /dev/null 

test-coverage:
	npx jest --coverage && open coverage/lcov-report/index.html

build-fixes:
	cd node_modules/react-native/scripts && ./ios-install-third-party.sh 
	cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh 
	# cp ios/build/Build/Products/Debug-iphonesimulator/libfishhook.a node_modules/react-native/Libraries/WebSocket
