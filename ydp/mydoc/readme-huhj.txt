TODO
	�������� 403 forbidden
		minipublisher\player\branches\1.1.x\utopia.lib\avm1Proxy\ant.lib\flashAntTask 
			=��external��һ���⣬�޷�����request for 'http://svn.ydp.com.pl/oss/trunk/flash/support/flashAntTask/flashAntTask/dist'
		minipublisher\player\branches\1.2.x\utopia.lib\src\pl\ydp\p2\modules\speechrecognition
		minipublisher\editor\trunk\utopia.edit.lib\src\pl\ydp\editor\module
	����취��
		����checkout�������Ŀ¼��Ȼ��������Ŀ¼		

Ant ���Լ�¼:
	�ؼ�������antִ��Ŀ¼�µ�local.properties
	minipublisher
		1) ����Java����Dev CMD��
		2��ִ��ant
		
		�ɹ�D:\ATemp\ydp\minipublisher\editor\trunk\nexl
		tags/0.10 sucess, ${product_version}
	qtiplayer
	
Eclipse ��������
	WS:
============================================
minipublisher
	build.xml
		=>����player/editor��trunkĿ¼
			��һ��ͨ���ļ���·�����Ա���base.dir��Ĭ�ϵ�ǰ·��
			�ڱ���Ŀ¼����ģ��Ŀ¼�·ֱ����ɰ�
			���ļ����Լ���base.dir
		=>read local.properties
			������ģ��build.xmlʱ���뱾�ļ��Ķ���
	local.properties
	/editor
		/branches
		/tags
			build.xml
			defaults.properties	=���汾�Ŷ���
			flex.xml
			local.properties
			/ant.lib
			/utopia.lib
				Flex library: utopia.lib.flex3
			/editor.online
				build.xml=>build.properties,��һ����flex.xml��export.xml
				build.properties
	
		/trunk
���䣺
	trunk�ƺ���ydp���������棬����ȫupdate��branches���ƺ����ڲ�svn����������

2009/02/17 
	����һ��local.porperties��ant����temp����checkout��editor/trunkĿ¼������Դ�����
	����һ��local.porperties��ant����temp����checkout��player/trunkĿ¼���ɹ�ֻ��packageĿ¼�µ�${product_version}����δ����Ч�滻
	bett2009 �������

��ν������뻷��
	1����װFlex SDK 3.0
	2����װJava����
	3����װAnt

	4��checkoutԴ����http://svn.ydp.com.pl/oss/projects/minipublisher
	5���ο�local.properties.sample�½�local.properties�ļ�
	   ����Ŀ¼��[��build.xml��local.properties��Ŀ¼]=>����Ŀ¼ִ��devCMD;ant����
		editor/trunk
