minipublisher
	build.xml
	local.properties
	/editor
		/branches
		/tags
		/trunk
			/editor.online
				=>editor
			/ext_scorm
				=>lib,ext_scorm
			/fbEditor.online
				=>fbEditor.online
			/miniPublisher
				=>AirEditor
				build.xml
					=>air�ַ�������Ҫ����ǩ����FlexBuilder��export release build��������air��
					=��{FLEX_HOME}/bin/adt -certificate -cn selfsign -ou test -o test -c CN 1024-RSA testcert.pfx hhj123
			/miniPublisherLib
				=>lib,miniPublisherLib
			/nexl
				=>...
			/nexlFlex
				=>lib,nexlFlex
			/nexlViews
				=>lib,nexlViews
			/utopia.edit.lib
				=>lib,utopia.edit.lib
			/utopia.lib
				=>lib,utopia.lib.flex3
			/utopia_calendar
				=>lib,utopia_calendar
			/utopia_puzzle
				=>lib,utopia_puzzle
	/incubator
	/player
		/branches
		/tags
		/trunk
			build.xml
				Ĭ������package=��dist+prepare.flash.extension
					��������г����Դ�롢Adobe��չ��
				dist=�����зַ�����
				prepare.flash.extension=����mxi�ļ����Ϊmxp,�����в��ִ�����Flash���;
					���ֶ���װ������(ֱ��˫��mxp��װ���ɹ�����ʾ��Flash Player 9=>��Ϊ�������Ǿɰ��em���ֶ�����extension manager��װok)��������FlashӦ����Ƕ��utPlayer��
				avm1.proxy=����
				install=����utPlayer.swf��������װĿ¼��������Web�������ķ�������
				install.packages=����������ļ�����װĿ¼
				docs=��
				clean=��
			defaults.properties
			flex.xml
			local.properties
			utopia4flash.mxi
			/nexl		=��Flex library project,����swc������flex��Ŀ��Ϊlibʹ�ã�����Flex SDK��swcһ��
				build.xml	=>����Ҫ��������nexl.swc
				/bin
				/jsfl	=>�ƺ����swc FlashCS3Ҳ��ʹ��
			/utopia.demo.player	=��Flex project����ʾ������Ӧ��
			/utopia.lib	=��Flex 3 library project�����������
			/utopia.players	=��Flex project�����������
			/utopia.test.temp=��Flex project��2.0����������
			/utopia.test.unit	=��Flex project���Զ�����Ԫ���ԣ�����Eclipse��ִ��
	/tools
		/trunk