package example

import jadeutils.base.ShellUtil

import org.slf4j.LoggerFactory
import org.slf4j.Logger

class ScalaAppExample(val msg: String)

/*
 * mvn clean scala:run -Dexec.mainClass=jadecrawler.website.YyetsCrawlerApp -DaddArgs="-u|username|-p|password|-m|checkin|-s|1|-e|1"
 */
object ScalaAppExample extends App with Logging {

	val osName = System.getProperty("os.name")
	while(true) {
		if (null != osName && osName.toLowerCase().contains("linux")) {
			val script = "ls -al";
			val shell = new ShellUtil();
			val result = shell.runBashScript(script, null, null);
			logger info result.getOut.toString
			val result2 = shell.runBashScript("ls", null, null);
			logger info result2.getOut.toString
		} else if (null != osName && osName.toLowerCase().contains("windows")) {
			val shell = new ShellUtil();
			val  hdl = new shell.DefaultStreamHandler("GB2312");
			shell.setStdoutCallback(hdl);
			shell.setStderrCallback(hdl);
			logger info "准备挂断"
			val result = shell.runWinCmd("rasphone -h 宽带连接", null, null);
			logger info result.getOut.toString
			logger info "已经挂断"
			val result2 = shell.runWinCmd("rasdial 宽带连接 et6 1026", null, null);
			logger info result2.getOut.toString
			logger info ""
			logger info ""
			logger info ""
		}
		Thread.sleep(60 * 1000)
	}
}



trait Logging {

	lazy val logger = LoggerFactory.getLogger(this.getClass)

	def getLoggerByName(name: String) = LoggerFactory.getLogger(name)

	private def matchLog(logFunc: (Seq[AnyRef]) => Unit, args: AnyRef*) { 
		args.toList match {
			case (h: TraversableOnce[_]) :: Nil => logFunc(h.toSeq.asInstanceOf[Seq[AnyRef]])
			case (h: Array[_]) :: Nil => logFunc(h.toSeq.asInstanceOf[Seq[AnyRef]])
			case _ => logFunc(args)
		}
	}

	def logTrace(msg: String, refs: Any*) {
		if (logger.isTraceEnabled) 
			matchLog((arrs) => { logger.trace(msg, arrs: _*) }, refs)
	}

	def logDebug(msg: String, refs: Any*) {
		if (logger.isDebugEnabled) 
			matchLog((arrs) => { logger.debug(msg, arrs: _*) }, refs)
	}

	def logInfo(msg: String, refs: Any*) {
		if (logger.isInfoEnabled) 
			matchLog((arrs) => { logger.info(msg, arrs: _*) }, refs)
	}

	def logWarn(msg: String, refs: Any*) {
		if (logger.isWarnEnabled) 
			matchLog((arrs) => { logger.warn(msg, arrs: _*) }, refs)
	}

	def logError(msg: String, refs: Any*) {
		if (logger.isErrorEnabled) 
			matchLog((arrs) => { logger.error(msg, arrs: _*) }, refs)
	}

}


